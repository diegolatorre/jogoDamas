function onClick(ev) {

    var mx = ev.x;
    var my = ev.y;

    for (var i = 0; i < 16; i++) {
        if (verificaPeca(mx, my, i)) {
            jogada.peca = i;
            jogada.ativo = true;
            pecas[i].selected = true;
            //mostrarJogadasBrancas(pecas[i]);
        } else {
            pecas[i].selected = false;
        }
    }


    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            tabuleiro[j][i].cor = 'brown';
        }
    }


    for (let j = 0; j <= 8; j++) {
        for (let i = 0; i < 8; i++) {
            if (verificaCasa(mx, my, i, j) && typeof tabuleiro[j][i].peca == 'undefined' && jogada.ativo) {
                tabuleiro[j][i].selected = true;
                jogada.casa.j = j;
                jogada.casa.i = i;
                moverPeca();
            } else {
                tabuleiro[j][i].selected = false;
            }
        }
    }

}

function verificaPeca(mx, my, i) {
    if (mx <= pecas[i].x + pecas[i].r && mx >= pecas[i].x - pecas[i].r && my <= pecas[i].y + pecas[i].r && my >= pecas[i].y - pecas[i].r) {
        return true;
    } else {
        return false;
    }
}

function verificaCasa(mx, my, i, j) {
    if (mx > tabuleiro[j][i].x && mx < tabuleiro[j][i].x + tabuleiro[j][i].w && my > tabuleiro[j][i].y && my < tabuleiro[j][i].y + tabuleiro[j][i].h) {
        return true;
    } else {
        return false;
    }
}