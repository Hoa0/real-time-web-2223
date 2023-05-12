let socket = io();
let messages = document.querySelector('section#chat ul');
const formMessage = document.getElementById('formChat');
let input = document.querySelector('#inputChat');
const fallback = document.querySelector(".fallback");
const onlinePlayers = document.querySelector('#listOfPeople');
const imgContainer = document.getElementById('coffeeImg');
const btnContainer = document.getElementById('answersBtn');
const newCoffeeBtn = document.getElementById('showCoffee');
const getScore = document.getElementById('score');
const rounds = document.getElementById('rounds');

let username = [];
let currentRound = 0;
let currentScore = 0;


// username = window.prompt("Enter your username");
// socket.emit('newUser', username);
// getScore.textContent = `Score: ${currentScore}`;

//
const startGame = () => {
    // playerName = document.querySelector('#name').value;
    // nameInput.style.display = 'none';
    // gameDiv.style.display = 'block';
    // startNewRound();
    username = window.prompt("Enter your username");
    socket.emit('newUser', username);
    startNewRound();
}

const startNewRound = () => {
    currentRound++;
    rounds.textContent = `Round ${currentRound}`;
    getScore.textContent = `Score: ${currentScore}`;

    socket.emit('getRandomCoffee');
}
startGame();

///

formMessage.addEventListener('submit', event => {
    event.preventDefault()
    if (input.value) {
        socket.emit('newMessage', input.value)
        input.value = ''
    }
})

const addUsers = (playerName) => {
    if (!!document.querySelector(`.${playerName}-userlist`)) {
        return;
    }

    const userContainer =
        `<li class="${playerName}-userlist">
        <span>&#9787; </span>${playerName}
    </li>`;
    onlinePlayers.innerHTML += userContainer;
    socket.emit('getRandomCoffee');
};

socket.on('newUser', (data) => {
    data.map((user) => addUsers(user));
    addUsers(username);
});

socket.on('userDisconnected', (playerName) => {
    // document.querySelector(`.${playerName}-userlist`).remove();
    const userContainer = document.querySelector(`.${playerName}-userlist`);
    if (userContainer) {
        userContainer.remove();
    }
});

// add message
socket.on('sendMessage', (message) => {
    messages.appendChild(Object.assign(document.createElement('li'), {
        textContent: message.user + ' : ' + message.message
    }))
    messages.scrollTop = messages.scrollHeight
})

// typing
input.addEventListener("keyup", () => {
    socket.emit("typing", {
        isTyping: input.value.length > 0,
        username,
    });
});

// user is typing
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

    //display coffee titles
    optionsBtn.forEach((element) => {
        const button = document.createElement('button');
        button.classList.add('optionBtn');
        button.textContent = element;

        button.addEventListener('click', handleBtnAnswer);
        btnContainer.appendChild(button);
    });

};

// display new coffee
// newCoffeeBtn.addEventListener('click', () => {
//     socket.emit('getRandomCoffee');
// });

socket.on('coffeeData', (data) => {
    renderCoffeeData(data);
});

const handleBtnAnswer = (event) => {
    const btnSelect = event.target.textContent;

    if (btnSelect === currentCoffee.title) {
        currentScore++;
        // alert(`Correct! The coffee is ${currentCoffee.title}`);
        socket.emit('newMessage', `Correct! The coffee is: ${currentCoffee.title}`, currentCoffee.title.value)
        // socket.emit('getRandomCoffee');
    } else {
        // alert(`Wrong! The coffee is ${currentCoffee.title}`);
        socket.emit('newMessage', `Wrong! The coffee is: ${currentCoffee.title}`, currentCoffee.title.value)
        // socket.emit('getRandomCoffee');
    }

    if (currentRound < 5) {
        startNewRound();
    } else{
        endGame();
    }
}

const endGame = () =>{
    socket.emit('newMessage',`Game over! Your score is ${currentScore}`)
    currentRound = 0;
    currentScore = 0;
}
// const startBtn = document.querySelector('#start-btn');
// startBtn.addEventListener('click', startNewRound);