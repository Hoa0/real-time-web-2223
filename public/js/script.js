let socket = io();
let messages = document.querySelector('section#chat ul');
let input = document.querySelector('#inputChat');

const formMessage = document.getElementById('formChat');
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

/**
 * Function to start the game
 * First, the program prompts the user to enter their username
 * and emits a newUser event to the server with the username as the data. 
 */
const startGame = () => {
    username = window.prompt("Enter your username");
    socket.emit('newUser', username);
    restartButton.style.display = 'none';
    startNewRound();
}

/**
 * Function for updating the round and score and display it.
 * Also increments the currentRound
 */
const startNewRound = () => {
    currentRound++;
    rounds.textContent = `Round: ${currentRound}`;
    getScore.textContent = `Score: ${currentScore}`;

    //Trigger the server to retrieve a random coffee from the API
    socket.emit('getRandomCoffee');
}

/**
 * Event emitted by the server and executes a callback function when the event is triggered
 * Add usernames to the userlist
 */
 socket.on('newUser', (data) => {
    data.map((user) => addUsers(user));
    addUsers(username);
});

/**
 * Function for adding users to a user list and display it.
 * The function checks if there is already an element with a class name: parameter
 * @param {playerName} string 
 * @returns 
 */
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

/**
 * 'CoffeeData' event, get coffee API from the server.
 * Render function renderCoffeeData
 */
socket.on('coffeeData', (data) => {
    renderCoffeeData(data);
});

/**
 * Display Coffee image, title and answer buttons
 * @param {title, image, optionsBtn} string 
 */
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

/**
 * The function handles the user's selection of an answer button by comparing the selected answer with the correct coffee title.
 * @param {event} string 
 * The function retrieves the text content of the button that triggered the event using event.target.textContent. 
 * It assigns this value to the variable btnSelect, representing the selected answer.
 */
const handleBtnAnswer = (event) => {
    const btnSelect = event.target.textContent;

    // check if the selected button is equal to the current coffee's title value and increase score
    if (btnSelect === currentCoffee.title) {
        currentScore++;
        socket.emit('newMessage', `Correct! The coffee is: ${currentCoffee.title}`, currentCoffee.title.value)

    } else {
        socket.emit('newMessage', `Wrong! The coffee is: ${currentCoffee.title}`, currentCoffee.title.value)
    }

    /**
     * Check if the current round is less than 5 and call the function
     * Otherwise, end the game
     */
    if (currentRound < 5) {
        startNewRound();
    } else {
        endGame();
    }
};

/**
 * Chat RTW
 * Event is received from the server
 * Show message to client
 */
socket.on('newMessage', (message) => {
    addMessage(message);
});

// Show message history
socket.on('history', (history) => {
    history.forEach((message) => {
        addMessage(message);
    })
});

/**
 * When the user submits the form by pressing enter or clicking a submit button, 
 * the code checks if the input field contains a message. 
 * If a message is present, it emits a 'newMessage' event to the server with 
 * the message content and clears the input field.
 */
formMessage.addEventListener('submit', event => {
    event.preventDefault()
    if (input.value) {
        socket.emit('newMessage', input.value)
        input.value = ''
    }
});

/**
 * Chat RTW
 * Function to create new 'li' element and sets textContent with username + input chat message.
 * Add to messages element
 * @param {message} string 
 */
function addMessage(message) {
    messages.appendChild(Object.assign(document.createElement('li'), {
        textContent: message.user + ' : ' + message.message
    }))
    //scrolled to the bottom to display the new message
    messages.scrollTop = messages.scrollHeight
}

/**
 * Chat RTW
 * When user is typing
 * Emits a 'typing' event to the server, 
 * indicating whether the user is currently typing and providing the username of the user.
 */
input.addEventListener("keyup", () => {
    socket.emit("typing", {
        isTyping: input.value.length > 0,
        username,
    });
});

/**
 * Chat RTW
 * when the "typing" event is received from the server, the code updates the content of 
 * the fallback element based on the isTyping value. If the user is typing, it displays 
 * a message indicating the username of the user who is currently typing. 
 * If the user is not typing, it clears the content of the fallback element.
 */
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
//

/**
 * The function handles the finalization of the game by emitting a message to the server, 
 * resetting the round and score variables, clearing the answer buttons, and displaying the restart button
 */
const endGame = () => {
    socket.emit('newMessage', `Game over! Your score is ${currentScore}`);
    currentRound = 0;
    currentScore = 0;
    btnContainer.innerHTML = '';
    restartButton.style.display = 'block';
};

/**
 * when the restart button is clicked, the code hides the button from the webpage and 
 * starts a new round of the game by calling the startNewRound() function.
 */
restartButton.addEventListener('click', () => {
    restartButton.style.display = 'none';
    startNewRound();
});

/**
 * If the user left the game/server, remove playerName from userlist.
 * Remove username from active players
 */
 socket.on('userDisconnect', (playerName) => {
    const userContainer = document.querySelector(`.${playerName}-userlist`);
    if (userContainer) {
        userContainer.remove();
    }
});

// call function to start the game
startGame();