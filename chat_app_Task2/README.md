# Real-Time Chat Application (NovaChat)

A modern responsive real-time chat application built with React.js and WebSockets.

## Features

- Real-time messaging using WebSockets
- Message history persistence (in-memory)
- Typing indicator for other users
- Voice / video call UI (simulated call flow)
- Join screen with username login
- Modern mobile-first design (Instagram DM inspired)
- Full-screen chat experience

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the WebSocket server:
   ```
   npm run server
   ```

3. In a new terminal, start the React development server:
   ```
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` (or the port shown by Vite).

## Usage

- Type a message in the input field and press Enter or click Send.
- Messages are broadcasted in real-time to all connected clients.
- Message history is loaded when connecting to the server.

## Technologies

- Frontend: React.js with Vite
- Backend: Node.js with WebSocket (ws library)
- Real-time communication: WebSockets