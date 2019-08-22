function Peca(x, y, c, l, cor) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.selected = false;
    this.casa = { c: c, l: l };
    this.cor = cor;
}

function newPeca(c, l, cor) {
    var peca = new Peca(tabuleiro[c][l].x + 25, tabuleiro[c][l].y + 25, c, l, cor);
    pecas.push(peca);
    tabuleiro[c][l].peca = pecas.indexOf(peca);
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

    //limpando a selecao de peca e casa
    pecas[jogada.peca].selected = false;
    tabuleiro[jogada.casa.c][jogada.casa.l].selected = false;

    //movendo a peca no tabuleiro
    pecas[jogada.peca].x = tabuleiro[jogada.casa.c][jogada.casa.l].x + 25;
    pecas[jogada.peca].y = tabuleiro[jogada.casa.c][jogada.casa.l].y + 25;

    //limpando na casa antiga o valor da peca
    tabuleiro[pecas[jogada.peca].casa.c][pecas[jogada.peca].casa.l].peca = null;

    //colocando o valor da nova casa na peca
    pecas[jogada.peca].casa.c = jogada.casa.c;
    pecas[jogada.peca].casa.l = jogada.casa.l;

    //colocando o valor da peca na nova casa
    tabuleiro[jogada.casa.c][jogada.casa.l].peca = jogada.peca;

    //limpando a jogada
    jogada.peca = null;
    jogada.casa.c = null;
    jogada.casa.l = null;
    jogada.ativo = false;
}