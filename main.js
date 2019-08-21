var tabuleiro = [];
var x = 10;
var y = 0;
var trocaCor = 0;
var brancas = [];
var pretas = [];
var pecas = [];
var jogada = { peca: null, casa: { j: null, i: null }, ativo: false }

function init() {

    //var ctx = setupCanvas(document.querySelector('canvas'));
    //var ctx = canvas.getContext('2d');

    //ClIQUE DO MOUSE
    canvas.addEventListener('mousedown', onClick, false);

    criaCasas();
    criaPecas();

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
    for (let i = 0; i <= 8; i++) {
        let linha = [];
        tabuleiro.push(linha);
    }

    for (let j = 0; j <= 8; j++) {
        y = 0;
        x += 60;
        for (let i = 0; i < 8; i++) {
            y += 60;
            newCasa(x, y, j, i);
        }
    }
}

function desenhaCasas(ctx) {
    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            drawCasa(ctx, j, i);
        }
    }
}

function desenhaPecas(ctx) {
    for (var i = 0; i < 16; i++) {
        drawPeca(ctx, i);
    }
}

function mostrarJogadasPretas(peca) {
    var diagonalDireita = { linha: peca.casa.linha + 1, coluna: peca.casa.coluna - 1 };
    var diagonalEsquerda = { linha: peca.casa.linha + 1, coluna: peca.casa.coluna + 1 };
    //console.log(`dEsquerdaLinha ${diagonalEsquerda.linha} dEsquerdaColuna ${diagonalEsquerda.coluna}`);
    //console.log(`dDireitaLinha ${diagonalDireita.linha} dDireitaColuna ${diagonalDireita.coluna}`);

    if (diagonalDireita.linha < 8 && diagonalDireita.coluna >= 0) {
        console.log('Jogada a direita');
        if (typeof tabuleiro[diagonalDireita.coluna][diagonalDireita.linha].peca === "undefined") {
            tabuleiro[diagonalDireita.coluna][diagonalDireita.linha].cor = 'blue';
        }
    }

    if (diagonalEsquerda.linha < 8 && diagonalEsquerda.coluna < 8) {
        console.log('Jogada a esquerda');
        if (typeof tabuleiro[diagonalEsquerda.coluna][diagonalEsquerda.linha].peca === "undefined") {
            tabuleiro[diagonalEsquerda.coluna][diagonalEsquerda.linha].cor = 'blue';
        }
    }
}

function mostrarJogadasBrancas(peca) {
    var diagonalDireita = { linha: peca.casa.linha - 1, coluna: peca.casa.coluna + 1 };
    var diagonalEsquerda = { linha: peca.casa.linha - 1, coluna: peca.casa.coluna - 1 };
    //console.log(`dEsquerdaLinha ${diagonalEsquerda.linha} dEsquerdaColuna ${diagonalEsquerda.coluna}`);
    //console.log(`dDireitaLinha ${diagonalDireita.linha} dDireitaColuna ${diagonalDireita.coluna}`);

    if (diagonalDireita.linha >= 0 && diagonalDireita.coluna < 8) {
        console.log('Jogada a direita');
        if (typeof tabuleiro[diagonalDireita.coluna][diagonalDireita.linha].peca === "undefined") {
            tabuleiro[diagonalDireita.coluna][diagonalDireita.linha].cor = 'blue';
        }
    }

    if (diagonalEsquerda.linha >= 0 && diagonalEsquerda.coluna >= 0) {
        console.log('Jogada a esquerda');
        if (typeof tabuleiro[diagonalEsquerda.coluna][diagonalEsquerda.linha].peca === "undefined") {
            tabuleiro[diagonalEsquerda.coluna][diagonalEsquerda.linha].cor = 'blue';
        }
    }
}