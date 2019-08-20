function Peca(x, y, casa, cor) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.selected = 0;
    this.casa = casa;
    this.cor = cor;
}

function newPeca(casa, cor) {
    var peca = new Peca(casa.x + 25, casa.y + 25, casa, cor);
    if (cor == 'white') {
        brancas.push(peca);
    } else {
        pretas.push(peca);
    }
}

function drawPeca(ctx, peca) {
    ctx.beginPath();

    if (peca.selected == 1) {
        ctx.fillStyle = 'pink';
    } else {
        ctx.fillStyle = peca.cor;
    }

    ctx.lineWeight = 1;
    ctx.arc(peca.x, peca.y, peca.r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function moverPeca(casa, peca) {
    pecaSelected = null;
    peca.x = casa.x + 25;
    peca.y = casa.y + 25;
    peca.casa = casa;
    //drawPeca(peca);
}