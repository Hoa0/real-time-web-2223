let socket = io();
let messages = document.querySelector('section#chat ul');
const formMessage = document.getElementById('formChat');
let input = document.querySelector('#inputChat');
const fallback = document.querySelector(".fallback");
const onlinePlayers = document.querySelector('#listOfPeople');
const imgContainer = document.getElementById('coffeeImg');
const btnContainer = document.getElementById('answersBtn');
const getScore = document.getElementById('score');
const rounds = document.getElementById('rounds');
const restartButton = document.getElementById('restartButton');

let username = [];
let currentRound = 0;
let currentScore = 0;

// Function to start the game
//First prompts the user to enter their username and then emits a newUser event to the server with the username as data. 
const startGame = () => {
    username = window.prompt("Enter your username");
    socket.emit('newUser', username);
    restartButton.style.display = 'none';
    startNewRound();
}

// Function for updates the text content of two elements round and getScore
// It also increments the rounds
const startNewRound = () => {
    currentRound++;
    rounds.textContent = `Round: ${currentRound}`;
    getScore.textContent = `Score: ${currentScore}`;

    //get random coffee from the api
    socket.emit('getRandomCoffee');
}

// Get input value from the chat input and display it 
formMessage.addEventListener('submit', event => {
    event.preventDefault()
    if (input.value) {
        socket.emit('newMessage', input.value)
        input.value = ''
    }
})

// Add user to the list and display it
const addUsers = (playerName) => {
    if (!!document.querySelector(`.${playerName}-userlist`)) {
        return;
    }

    const userContainer =
        `<li class="${playerName}-userlist">
        <span>✔ </span>${playerName}
    </li>`;
    onlinePlayers.innerHTML += userContainer;
};

//Event emitted by the server and executes a callback function when the event is triggered
//Add username
socket.on('newUser', (data) => {
    data.map((user) => addUsers(user));
    addUsers(username);
});

//If the user left the game, remove playerName
socket.on('userDisconnected', (playerName) => {
    const userContainer = document.querySelector(`.${playerName}-userlist`);
    if (userContainer) {
        userContainer.remove();
    }
});

// Show message
socket.on('newMessage', (message) => {
    addMessage(message);
})

// Show message history
socket.on('history', (history) => {
    history.forEach((message) => {
        addMessage(message);
    })
});

// Add message
function addMessage(message) {
    messages.appendChild(Object.assign(document.createElement('li'), {
        textContent: message.user + ' : ' + message.message
    }))
    messages.scrollTop = messages.scrollHeight
}

// Typing
input.addEventListener("keyup", () => {
    socket.emit("typing", {
        isTyping: input.value.length > 0,
        username,
    });
});

// User is typing
socket.on("typing", (data) => {
    const {
        isTyping,
        username
    } = data;

    if (!isTyping) {
        fallback.innerHTML = "";
        return;
    }

    fallback.innerHTML = `<p>${username} is typing...</p>`;
});

//Display coffee api
const renderCoffeeData = ({
    title,
    image,
    optionsBtn
}) => {
    currentCoffee = {
        title,
        image
    };
    imgContainer.innerHTML = `<img src="${image}" alt="${title}">`;
    btnContainer.innerHTML = '';

    //Create buttons dynamically for the multiple choice answer options
    optionsBtn.forEach((element) => {
        const button = document.createElement('button');
        button.classList.add('optionBtn');
        button.textContent = element;

        button.addEventListener('click', handleBtnAnswer);
        btnContainer.appendChild(button); // Add all buttons to the btnContainer
    });

};


// Render api data
socket.on('coffeeData', (data) => {
    renderCoffeeData(data);
});

// Handle a user's guess for the coffee name. It is triggered when the user clicks on one of the option buttons
const handleBtnAnswer = (event) => {
    const btnSelect = event.target.textContent;

    // check if the selected button is equal to the current coffee's title value and increase score
    if (btnSelect === currentCoffee.title) {
        currentScore++;
        socket.emit('newMessage', `Correct! The coffee is: ${currentCoffee.title}`, currentCoffee.title.value)

    } else {
        socket.emit('newMessage', `Wrong! The coffee is: ${currentCoffee.title}`, currentCoffee.title.value)
    }

    // Check if the current round is less than 5 and call the function
    // Otherwise, end the game
    if (currentRound < 5) {
        startNewRound();
    } else {
        endGame();
    }
}

restartButton.addEventListener('click', () => {
    restartButton.style.display = 'none';
    startNewRound();
});

//Function when the game has ended, it also resets the values of currentRound and currentScore to 0 in preparation for a new game.
const endGame = () => {
    socket.emit('newMessage', `Game over! Your score is ${currentScore}`);
    currentRound = 0;
    currentScore = 0;
    btnContainer.innerHTML = '';
    restartButton.style.display = 'block';
}

startGame();