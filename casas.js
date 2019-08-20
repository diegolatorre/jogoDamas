function Casa(x, y, linha, coluna) {
    this.x = x;
    this.y = y;
    this.h = 50;
    this.w = 50;
    this.linha = linha;
    this.coluna = coluna;
    this.cor = 'brown';
}

function newCasa(x, y, j, k) {
    var casa = new Casa(x, y, k, j);
    tabuleiro[j].push(casa);
}

function drawCasa(ctx, casa) {
    ctx.fillStyle = casa.cor;
    ctx.fillRect(casa.x, casa.y, casa.h, casa.w);
}