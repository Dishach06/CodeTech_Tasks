import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [callStatus, setCallStatus] = useState('idle');
  const [activeCallType, setActiveCallType] = useState(null); // 'voice' | 'video'
  const [callee, setCallee] = useState('');
  const [typingUsers, setTypingUsers] = useState([]);
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isReady) return;

    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onopen = () => {
      console.log('WebSocket connected');
      ws.current.send(JSON.stringify({ type: 'status', username: username.trim() }));
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'history') {
        setMessages(data.messages || []);
      } else if (data.type === 'message') {
        setMessages((prev) => [...prev, data]);
      } else if (data.type === 'typing' && data.username !== username) {
        setTypingUsers((prev) => {
          if (prev.includes(data.username)) return prev;
          return [...prev, data.username];
        });

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(() => {
          setTypingUsers((prev) => prev.filter((u) => u !== data.username));
        }, 1400);
      }
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.current.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.current?.close();
    };
  }, [isReady, username]);

  const sendTyping = () => {
    if (!ws.current || ws.current.readyState !== WebSocket.OPEN) return;
    ws.current.send(
      JSON.stringify({
        type: 'typing',
        username,
        timestamp: new Date().toISOString(),
      })
    );
  };

  const sendMessage = () => {
    if (!input.trim() || !ws.current || ws.current.readyState !== WebSocket.OPEN) return;

    const message = {
      type: 'message',
      username,
      text: input.trim(),
      timestamp: new Date().toISOString(),
    };

    ws.current.send(JSON.stringify(message));
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'now';
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    return date.toLocaleDateString();
  };

  const startCall = (type) => {
    if (!username.trim()) return;
    setActiveCallType(type);
    setCallStatus('ringing');
    setCallee('Everyone');

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          type: 'call',
          callMode: type,
          from: username,
          to: 'everyone',
          timestamp: new Date().toISOString(),
        })
      );
    }

    setTimeout(() => {
      setCallStatus('in-call');
    }, 1200);
  };

  const endCall = () => {
    setCallStatus('idle');
    setActiveCallType(null);
    setCallee('');
  };

  const joinChat = () => {
    if (username.trim().length >= 3) {
      setIsReady(true);
    }
  };

  if (!isReady) {
    return (
      <div className="join-screen">
        <div className="join-box">
          <h1>NovaChat</h1>
          <p>Enter your display name to join the conversation</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name (min 3 chars)"
          />
          <button onClick={joinChat} disabled={username.trim().length < 3}>
            Join Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>NovaChat - Connect instantly</span>
        <div className="chat-actions">
          <button className="action-button call" onClick={() => startCall('voice')}>
            🔊 Voice Call
          </button>
          <button className="action-button video" onClick={() => startCall('video')}>
            📹 Video Call
          </button>
        </div>
      </div>

      {callStatus !== 'idle' && (
        <div className={`call-state ${callStatus}`}>
          <div>
            {activeCallType === 'video' ? 'Video' : 'Voice'} call {callStatus === 'ringing' ? 'ringing' : 'active'} with{' '}
            {callee}
          </div>
          <button className="end-call" onClick={endCall}>
            End Call
          </button>
        </div>
      )}

      <div className="messages">
        {messages.map((msg, index) => {
          const isOwn = msg.username && msg.username.toLowerCase() === username.toLowerCase();
          return (
            <div key={index} className={`message ${isOwn ? 'own' : ''}`}>
              <div className="message-avatar">
                {msg.username ? msg.username.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="message-bubble">
                <div className="message-content">{msg.text}</div>
                <div className="message-meta">
                  <span className="message-username">{msg.username || 'Guest'}</span>
                  <span className="message-time">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {typingUsers.length > 0 && (
        <div className="typing-indicator">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}

      <div className="input-area">
        <div className="input-container">
          <input
            type="text"
            className="message-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              sendTyping();
            }}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            aria-label="Message input"
          />
        </div>
        <button className="send-button" onClick={sendMessage} aria-label="Send message">
          ➤
        </button>
      </div>
    </div>
  );
}

export default App;