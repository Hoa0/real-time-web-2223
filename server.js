const {
  ifError
} = require('assert');
// Import required modules
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Set the port for the server to listen on
const port = process.env.PORT || 3002;

// Set up middleware to serve static files
app.use(express.static(path.resolve('public')));

// Set the view engine to ejs and set the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

const activeUsers = new Set();
const apiUrl = 'https://raw.githubusercontent.com/jermbo/SampleAPIs/main/server/api/coffee.json';

const getRandomCoffee = async () =>{
  return fetch(apiUrl)
  .then (response => response.json())
  .then(data =>{
    const {hot, iced} = data;
    const allCoffees = [...hot,...iced];
    const randomIndex = Math.floor(Math.random()* allCoffees.length);
    return allCoffees[randomIndex];
  })
  .catch(error => console.error(error));
}

// Set up a route
app.get('/', (req, res) => {
  res.render('index.ejs', {
    //pageTitle: 'Home'
  });
})

// Set up socket.io event handlers
io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('getRandomCoffee', async() =>{
    try{
      const coffee = await getRandomCoffee();
      const {title,image} = coffee;
      const optionsBtn = [
        title, 
        `${title} Macchiato`,
        `${title} Latte`,
        `${title} Espresso`,
      ].sort(() => Math.random() - 0.5).slice(0,4);
      socket.emit('coffeeData', {title, image, optionsBtn});
    } catch(err){
      console.error(err);
    }
  });


  socket.on('newMessage', (message) => {

    io.emit('sendMessage', {
      message: message,
      user: socket.username
    });

  })

  socket.on('newUser', (user) => {
    socket.username = user;
    activeUsers.add(user);
    io.emit('newUser', [...activeUsers]);
    console.log('User connected - Username: ' + socket.username);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

  socket.on('disconnect', () => {
    activeUsers.delete(socket.username);
    io.emit('userDisconnected', socket.username);
    console.log('user disconnected', socket.username);
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})
