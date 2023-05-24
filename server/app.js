const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const authConfig = require('./config/authConfig');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 3000;
const mongoURI = 'mongodb+srv://gerome:gerome@cluster0.nglekd0.myappdb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

// Set up routes
app.use('/auth', authRoutes);
app.use('/chat', authConfig.authenticateUser, chatRoutes);

io.on('connection', (socket) => {
  console.log('A client connected');

  // Handle real-time events here

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
