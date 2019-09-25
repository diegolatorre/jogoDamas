const socket = io();
socket.on('connect', function () {
    $(".info").append('Connected with id: ' + socket.id + "<br>");
    console.log(socket.id);
    socket.emit('msg', 'entrei ' + socket.id);
});
socket.on('jogada', function (jogadaServer) {
    if (multiplayer) {
        $(".info").append('<br>' + jogadaServer);
        jogada = JSON.parse(jogadaServer);
        percorrerPecas();
    }
});
socket.on('tabuleiro', function (tabuleiroServer) {
    if (multiplayer) {
        tabuleiro = JSON.parse(tabuleiroServer);
        percorrerPecas();
    }
});
socket.on('pecas', function (pecasServer) {
    if (multiplayer) {
        pecas = JSON.parse(pecasServer);
        percorrerPecas();
    }
});
socket.on('escolhaJogador', function (escolhaJogador) {
    if (multiplayer) {
        if (escolhaJogador == 'white') {
            $("#btnBranco").remove();
        }
        if (escolhaJogador == 'black') {
            $("#btnPreto").remove();
        }
    }
});
