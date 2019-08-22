function Casa(x, y, coluna, linha) {
    this.x = x;
    this.y = y;
    this.h = 50;
    this.w = 50;
    this.linha = linha;
    this.coluna = coluna;
    this.cor = 'brown';
    this.peca = null;
    this.selected = false;
}

function newCasa(x, y, c, l) {
    var casa = new Casa(x, y, c, l);
    tabuleiro[c].push(casa);
}

function drawCasa(ctx, c, l) {
    if (tabuleiro[c][l].selected) {
        ctx.fillStyle = 'blue';
    } else {
        ctx.fillStyle = tabuleiro[c][l].cor;
    }
    ctx.fillRect(tabuleiro[c][l].x, tabuleiro[c][l].y, tabuleiro[c][l].h, tabuleiro[c][l].w);
}