const socket = io();

socket.on('connect', function () {
    $(".info").append('Connected with id: ' + socket.id + "<br>");
    console.log(socket.id);
    socket.emit('msg', 'entrei ' + socket.id);
});

socket.on('jogada', function (jogadaServer) {
    if (multiplayer) {
        jogada = JSON.parse(jogadaServer);
        percorrerPecas();
    }
});

socket.on('tabuleiro', function (tabuleiroServer) {
    if (multiplayer) {
        newTabuleiro = JSON.parse(tabuleiroServer);
        if (newTabuleiro[0][0].w !== tabuleiro[0][0].w) {
            for (let c = 0; c < 8; c++) {
                for (let l = 0; l < 8; l++) {
                    newTabuleiro[c][l].w = tabuleiro[c][l].w;
                    newTabuleiro[c][l].h = tabuleiro[c][l].h;
                    newTabuleiro[c][l].x = tabuleiro[c][l].x;
                    newTabuleiro[c][l].y = tabuleiro[c][l].y;
                }
            }
            tabuleiro = newTabuleiro;
        } else {
            tabuleiro = newTabuleiro;
        }
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
