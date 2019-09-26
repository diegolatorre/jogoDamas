function Casa(x, y, coluna, linha, h, w, cor) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.linha = linha;
    this.coluna = coluna;
    this.cor = cor;
    this.peca = null;
    this.selected = false;
}

function newCasa(x, y, c, l) {
    var h, w, cor;
    
    if (screen.width <= 400) {
        h = (screen.width / 8.8);
        w = (screen.width / 8.8);
    } else {
        h = 75;
        w = 75;
    }

    if ((c + l) % 2 == 0){
        cor = '#4f2523';
    } else {
        cor = '#a1795a';
    }

    var casa = new Casa(x, y, c, l, h, w, cor);
    tabuleiro[c].push(casa);
}

function drawCasa(ctx, c, l) {
    ctx.fillStyle = tabuleiro[c][l].cor;
    ctx.fillRect(tabuleiro[c][l].x, tabuleiro[c][l].y, tabuleiro[c][l].h, tabuleiro[c][l].w);
}