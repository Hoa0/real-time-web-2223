let socket = io();
let messages = document.querySelector('section ul');
let input = document.querySelector('input');
const fallback = document.querySelector(".fallback");
const onlinePlayers = document.querySelector('#listOfPeople');
const imgContainer = document.getElementById('coffeeImg');
const btnContainer = document.getElementById('answersBtn');
const newCoffeeBtn = document.getElementById('showCoffee');

let username = [];

username = window.prompt("Enter your username");
socket.emit('newUser', username);

document.querySelector('form').addEventListener('submit', event => {
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
        ${playerName}
    </li>`;
    onlinePlayers.innerHTML += userContainer;
};

socket.on('newUser',(data) => {
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
    imgContainer.innerHTML = `<img src="${image}" alt="${title}">`;

    btnContainer.innerHTML = '';
    optionsBtn.forEach(element => {
        const button = document.createElement('button');
        button.innerHTML = element;
        button.addEventListener('click', () => {
            // iets
        })
        btnContainer.appendChild(button);
    });

};

newCoffeeBtn.addEventListener('click', () => {
    socket.emit('getRandomCoffee');
});

socket.on('coffeeData', (data) => {
    renderCoffeeData(data);
});