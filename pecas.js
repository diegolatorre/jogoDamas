function Peca(x, y, j, i, cor) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.selected = false;
    this.casa = { j: j, i: i };
    this.cor = cor;
}

function newPeca(j, i, cor) {
    var peca = new Peca(tabuleiro[j][i].x + 25, tabuleiro[j][i].y + 25, j, i, cor);
    pecas.push(peca);
    tabuleiro[j][i].peca = pecas.indexOf(peca);
}

function drawPeca(ctx, i) {
    ctx.beginPath();

    if (pecas[i].selected) {
        ctx.lineWidth = 10;
        ctx.fillStyle = 'pink';
    } else {
        ctx.fillStyle = pecas[i].cor;
        ctx.lineWidth = 01;
    }

    ctx.arc(pecas[i].x, pecas[i].y, pecas[i].r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function moverPeca() {

    pecas[jogada.peca].selected = false;
    tabuleiro[jogada.casa.j][jogada.casa.i].selected = false;
    pecas[jogada.peca].x = tabuleiro[jogada.casa.j][jogada.casa.i].x + 25;
    pecas[jogada.peca].y = tabuleiro[jogada.casa.j][jogada.casa.i].y + 25;
    pecas[jogada.peca].casa.j = jogada.casa.j;
    pecas[jogada.peca].casa.i = jogada.casa.i;
    tabuleiro[jogada.casa.j][jogada.casa.i].casa = pecas[pecas[jogada.peca]];

    jogada.peca = null;
    jogada.casa.j = null;
    jogada.casa.i = null;
    jogada.ativo = false;
}