function Casa(x, y, linha, coluna, peca) {
    this.x = x;
    this.y = y;
    this.h = 50;
    this.w = 50;
    this.linha = linha;
    this.coluna = coluna;
    this.cor = 'brown';
    this.peca = peca;
    this.selected = false;
}

function newCasa(x, y, j, k) {
    var casa = new Casa(x, y, k, j);
    tabuleiro[j].push(casa);
}

function drawCasa(ctx, j, i) {
    if (tabuleiro[j][i].selected) {
        ctx.fillStyle = 'blue';
    } else {
        ctx.fillStyle = tabuleiro[j][i].cor;
    }
    ctx.fillRect(tabuleiro[j][i].x, tabuleiro[j][i].y, tabuleiro[j][i].h, tabuleiro[j][i].w);
}