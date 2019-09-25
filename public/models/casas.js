function Casa(x, y, coluna, linha, h, w) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.linha = linha;
    this.coluna = coluna;
    this.cor = '#854836';
    this.peca = null;
    this.selected = false;
}

function newCasa(x, y, c, l) {
    var h, w;
    h = (screen.width / 8) - 10;
    w = (screen.width / 8) - 10;
    
    /*if (screen.width <= 400) {
        h = 27;
        w = 27;
    } else {
        h = 65;
        w = 65;
    }*/
    
    var casa = new Casa(x, y, c, l, h, w);
    tabuleiro[c].push(casa);
}

function drawCasa(ctx, c, l) {
    ctx.fillStyle = tabuleiro[c][l].cor;
    ctx.fillRect(tabuleiro[c][l].x, tabuleiro[c][l].y, tabuleiro[c][l].h, tabuleiro[c][l].w);
}