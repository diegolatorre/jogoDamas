var tabuleiro = [];
var finalJogo = false;
var x = 0;
var y = 0;
var trocaCor = 0;
var brancas = [];
var pretas = [];
var pecas = [];
var jogada = { peca: null, casa: { c: null, l: null }, casaOrigem: { c: null, l: null }, ativo: false, jogador: null }
var logJogadas = '', countJogadas = 1, countPecasBrancas = 0, countPecasPretas = 0, countDamasBrancas = 0, countDamasPretas = 0;
var jogadasPossiveis = [];
var jogadasObrigatorias = [];
var idJogada = 0;
var ultimaPeca = null;
var umJogador = false, doisJogadores = false, multiplayer = false, escolhaJogador = null;
const crownWhite = new Image();
crownWhite.src = 'img/crownWhite.png';
const crownBlack = new Image();
crownBlack.src = 'img/crownBlack.png';
var roomName = null;

function init() {

    //ClIQUE DO MOUSE
    canvas.addEventListener('mousedown', onClick, false);

    criaCasas();
    criaPecas();

    jogada.jogador = 'white';

    percorrerPecas();

    setInterval(draw, 1000 / 60);
}

function draw() {

    for (let i = 0; i < pecas.length; i++) {
        if (pecas[i]) {
            if (pecas[i].cor == 'white') {
                countPecasBrancas++;
            }

            if (pecas[i].cor == 'black') {
                countPecasPretas++;
            }
        }
    }

    if (countPecasBrancas == 0 | countPecasPretas == 0) {
        finalJogo = true;
    } else {
        countPecasBrancas = 0;
        countPecasPretas = 0;
    }

    var ctx = setupCanvas(document.querySelector('canvas'));
    var ctx = canvas.getContext('2d');

    if (!finalJogo) {
        desenhaCasas(ctx);

        desenhaPecas(ctx);

        if (umJogador) {
            computadorJogar();
        }
    } else {
        desenhaCasas(ctx);

        desenhaPecas(ctx);

        jogoFinalizado();
    }

}

function criaPecas() {
    newPeca(0, 1, 'black');
    newPeca(1, 0, 'black');
    newPeca(2, 1, 'black');
    newPeca(3, 0, 'black');
    newPeca(4, 1, 'black');
    newPeca(5, 0, 'black');
    newPeca(6, 1, 'black');
    newPeca(7, 0, 'black');
    newPeca(1, 2, 'black');
    newPeca(3, 2, 'black');
    newPeca(5, 2, 'black');
    newPeca(7, 2, 'black');


    newPeca(0, 7, 'white');
    newPeca(1, 6, 'white');
    newPeca(2, 7, 'white');
    newPeca(3, 6, 'white');
    newPeca(4, 7, 'white');
    newPeca(5, 6, 'white');
    newPeca(6, 7, 'white');
    newPeca(7, 6, 'white');
    newPeca(0, 5, 'white');
    newPeca(2, 5, 'white');
    newPeca(4, 5, 'white');
    newPeca(6, 5, 'white');

}

function criaCasas() {
    for (let c = 0; c < 8; c++) {
        let coluna = [];
        tabuleiro.push(coluna);
    }

    for (let c = 0; c < 8; c++) {
        if (c == 0) {
            y = 0;
            x += 0;
        } else {
            if (screen.width <= 400) {
                y = 0;
                x += (screen.width / 8.8);
            } else {
                y = 0;
                x += 75;
            }
        }
        for (let l = 0; l < 8; l++) {
            if (l == 0) {
                y += 0;
            } else if (screen.width <= 400) {
                y += (screen.width / 8.8);
            } else {
                y += 75;
            }
            newCasa(x, y, c, l);
        }
    }
}

function desenhaCasas(ctx) {
    for (let c = 0; c < 8; c++) {
        for (let l = 0; l < 8; l++) {
            drawCasa(ctx, c, l);
        }
    }
}

function desenhaPecas(ctx) {
    for (var i = 0; i < 24; i++) {
        if (pecas[i]) {
            drawPeca(ctx, i);
        }
    }
}

function computadorJogar() {
    if (jogada.jogador == 'black') {
        if (jogadasObrigatorias.length > 0) {
            var jogadaFazer = Math.floor(Math.random() * ((jogadasObrigatorias.length - 1) - 0 + 1)) + 0;
            console.log(jogadaFazer);
            jogada.casa.c = jogadasObrigatorias[jogadaFazer].destino.c;
            jogada.casa.l = jogadasObrigatorias[jogadaFazer].destino.l;
            jogada.casaOrigem.c = jogadasObrigatorias[jogadaFazer].origem.c;
            jogada.casaOrigem.l = jogadasObrigatorias[jogadaFazer].origem.l;
            jogada.peca = jogadasObrigatorias[jogadaFazer].peca;
            tabuleiro[pecas[jogadasObrigatorias[jogadaFazer].pecaEliminar].casa.c][pecas[jogadasObrigatorias[jogadaFazer].pecaEliminar].casa.l].peca = null;
            pecas[jogadasObrigatorias[jogadaFazer].pecaEliminar] = null;
            moverPeca();
        } else if (jogadasPossiveis.length > 0) {
            var jogadaFazer = Math.floor(Math.random() * ((jogadasPossiveis.length - 1) - 0 + 1)) + 0;
            console.log(jogadaFazer);
            jogada.casa.c = jogadasPossiveis[jogadaFazer].destino.c;
            jogada.casa.l = jogadasPossiveis[jogadaFazer].destino.l;
            jogada.casaOrigem.c = jogadasPossiveis[jogadaFazer].origem.c;
            jogada.casaOrigem.l = jogadasPossiveis[jogadaFazer].origem.l;
            jogada.peca = jogadasPossiveis[jogadaFazer].peca;
            moverPeca();
        } else {
            jogoFinalizado();
        }
    }
}

function jogoFinalizado() {
    if (countPecasBrancas == 0) {
        document.getElementById("jogador").innerHTML = 'Pretas Venceu';
    }

    if (countPecasPretas == 0) {
        document.getElementById("jogador").innerHTML = 'Brancas Venceu';
    }

    if (jogada.jogador == 'white') {
        document.getElementById("jogador").innerHTML = 'Pretas Venceu';
    }

    if (jogada.jogador == 'black') {
        document.getElementById("jogador").innerHTML = 'Brancas Venceu';
    }
}
