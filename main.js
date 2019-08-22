var tabuleiro = [];
var x = 10;
var y = 0;
var trocaCor = 0;
var brancas = [];
var pretas = [];
var pecas = [];
var jogada = { peca: null, casa: { c: null, l: null }, ativo: false, jogador: null }

function init() {

    //var ctx = setupCanvas(document.querySelector('canvas'));
    //var ctx = canvas.getContext('2d');

    //ClIQUE DO MOUSE
    canvas.addEventListener('mousedown', onClick, false);

    criaCasas();
    criaPecas();

    jogada.jogador = 'white';

    setInterval(draw, 1000 / 60);
}

function draw() {

    var ctx = setupCanvas(document.querySelector('canvas'));
    var ctx = canvas.getContext('2d');

    desenhaCasas(ctx);

    desenhaPecas(ctx);

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

    newPeca(0, 7, 'white');
    newPeca(1, 6, 'white');
    newPeca(2, 7, 'white');
    newPeca(3, 6, 'white');
    newPeca(4, 7, 'white');
    newPeca(5, 6, 'white');
    newPeca(6, 7, 'white');
    newPeca(7, 6, 'white');
}

function criaCasas() {
    for (let c = 0; c <= 8; c++) {
        let coluna = [];
        tabuleiro.push(coluna);
    }

    for (let c = 0; c <= 8; c++) {
        y = 0;
        x += 60;
        for (let l = 0; l < 8; l++) {
            y += 60;
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
    for (var i = 0; i < 16; i++) {
        drawPeca(ctx, i);
    }
}

function mostrarJogadasPretas(i) {
    
}