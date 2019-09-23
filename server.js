const app = require('express')();
const http = require('http').createServer(app);
const express = require('express');
const port = process.env.PORT || 3000;

const io = require('socket.io')(http);
app.use('/static', express.static('C:/Users/dflim/Desktop/jogoDamas'));

app.get('/', (req, res) => {
    res.sendFile('C:/Users/dflim/Desktop/jogoDamas/index.html');
});

io.on('connection', (socket) => {
    console.log('new connection', socket.id);
    socket.on('msg', (msg) => {
        console.log(msg);
        socket.broadcast.emit('msg', socket.id + ' connected');
    });
    socket.on('jogada', (jogada) => {
        //console.log(jogada);
        socket.broadcast.emit('jogada', jogada);
    });
    socket.on('tabuleiro', (tabuleiro) => {
        //console.log(tabuleiro);
        socket.broadcast.emit('tabuleiro', tabuleiro);
    });
    socket.on('pecas', (pecas) => {
        //console.log(jogada);
        socket.broadcast.emit('pecas', pecas);
    });
    socket.on('escolhaJogador', (escolhaJogador) => {
        //console.log(jogada);
        socket.broadcast.emit('escolhaJogador', escolhaJogador);
    });
})

http.listen(port, function () {
    console.log(`starting server at: ${port}`);
});