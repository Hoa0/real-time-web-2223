let socket = io();
let messages = document.querySelector('section ul');
let input = document.querySelector('input');
const fallback = document.querySelector(".fallback");
const onlinePlayers = document.querySelector('.listOfPeople');

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
        `<div class="chat_ib ${playerName}-userlist">
        <h2>${playerName}</h2>
    </div>`;
    onlinePlayers.innerHTML += userContainer;
};

socket.on('newUser', function (data) {
    data.map((user) => addUsers(user));
    addUsers(username);
});

socket.on('userDisconnected', function (playerName) {
    document.querySelector(`.${playerName}-userlist`).remove();
});

// add message
socket.on('sendMessage', message => {
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