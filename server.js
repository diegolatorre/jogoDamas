const app = require('express')();
const http = require('http').createServer(app);
const express = require('express');
const port = process.env.PORT || 3000;

const io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


io.on('connection', (socket) => {
    socket.on('jogada', (data) => {
        socket.broadcast.to(data.to).emit('jogada', data.msg);
    });
    socket.on('tabuleiro', (data) => {
        //console.log(tabuleiro);
        socket.broadcast.to(data.to).emit('tabuleiro', data.msg);
    });
    socket.on('pecas', (data) => {
        //console.log(jogada);
        socket.broadcast.to(data.to).emit('pecas', data.msg);
    });
    socket.on('escolhaJogador', function (data) {
        console.log(data.to);
        socket.broadcast.to(data.to).emit('escolhaJogador', data.msg);
    });
    socket.on('addToRoom', function (roomName) {
        socket.join(roomName);
    });

    socket.on('removeFromRoom', function (roomName) {
        socket.leave(roomName);
    });
})

http.listen(port, function () {
    console.log(`starting server at: ${port}`);
});