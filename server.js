const {
  ifError
} = require('assert');
// Import required modules
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const fetch = (...args) => import('node-fetch').then(({
  default: fetch
}) => fetch(...args));

// Set the port for the server to listen on
const port = process.env.PORT || 3002;

// Set up middleware to serve static files
app.use(express.static(path.resolve('public')));

// Set the view engine to ejs and set the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Fetch a random coffee from the API
const apiUrl = 'https://raw.githubusercontent.com/jermbo/SampleAPIs/main/server/api/coffee.json';

//Creates a new Set object to store active users.
const activeUsers = new Set();

//score
let countScore = 0;
let rounds = 0;


const getRandomCoffee = async () => {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const {
        hot,
        iced
      } = data;
      const allCoffees = [...hot, ...iced];
      const randomIndex = Math.floor(Math.random() * allCoffees.length);
      return allCoffees[randomIndex];
    })
    .catch(error => console.error(error));
}

// Set up a route
app.get('/', (req, res) => {
  res.render('index.ejs');
})

// Set up socket.io event handlers
io.on('connection', (socket) => {
  console.log('a user connected');

  // Get a random coffee and emit it to the client
  socket.on('getRandomCoffee', async () => {
    try {
      const coffee = await getRandomCoffee();
      const {
        title,
        image
      } = coffee;
      const optionsBtn = [
        title,
        `${title} Macchiato`,
        `${title} Latte`,
        `${title} Espresso`,
      ].sort(() => Math.random() - 0.5).slice(0, 4);
      socket.emit('coffeeData', {
        title,
        image,
        optionsBtn
      });
    } catch (err) {
      console.error(err);
    }
  });

  // Handle user guesses and emit the result to the client
  socket.on('guessCoffeeAnswer', (guess) => {
    const {
      correctAnswer,
      userAnswer
    } = guess;
    if (correctAnswer === userAnswer) {
      countScore++;
    }
    rounds++;
    if (rounds === 5) {
      socket.emit('gameOver', countScore);
      countScore = 0;
      rounds = 0;

    } else {
      socket.emit('result', {
        correct: correctAnswer === userAnswer,
        countScore,
        rounds
      });
    }
  });

  //When a user sends a message, the code emits a 'sendMessage' event to all connected clients with the message content and the username of the sender.
  socket.on('newMessage', (message) => {

    io.emit('sendMessage', {
      message: message,
      user: socket.username
    });

  })

  //emits a 'newUser' event to all connected clients with a list of active users.
  socket.on('newUser', (user) => {
    socket.username = user;
    activeUsers.add(user);
    io.emit('newUser', [...activeUsers]);
    console.log('User connected - Username: ' + socket.username);
  });

  //When a user starts typing, the code emits a 'typing' event to all connected clients except the sender.
  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

  //When a user disconnects, the code removes their username from the activeUsers set, emits a 'userDisconnected' event to all connected clients with the username of the disconnected user,
  socket.on('disconnect', () => {
    activeUsers.delete(socket.username);
    io.emit('userDisconnected', socket.username);
    console.log('user disconnected', socket.username);
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})