import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let messages = []; // In-memory message history

wss.on('connection', function connection(ws) {
  console.log('New client connected');

  // Send message history to the new client
  ws.send(JSON.stringify({ type: 'history', messages }));

  ws.on('message', function incoming(message) {
    const data = JSON.parse(message.toString());

    if (data.type === 'message') {
      messages.push(data);
      console.log('Received message:', data.text);

      // Broadcast the message to all connected clients
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }

    if (data.type === 'typing') {
      const typingEvent = {
        type: 'typing',
        username: data.username || 'Guest',
        timestamp: new Date().toISOString(),
      };

      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(typingEvent));
        }
      });
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');