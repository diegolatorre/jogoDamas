function onClick(ev) {

    var mx = ev.x;
    var my = ev.y;

    for (var i = 0; i < 16; i++) {
        if (verificaPeca(mx, my, i)) {
            if (pecas[i].cor == jogada.jogador) {
                jogada.peca = i;
                jogada.ativo = true;
                pecas[i].selected = true;
                console.log(i);
                //mostrarJogadas(i);
            }
        } else {
            pecas[i].selected = false;
        }
    }


    for (let c = 0; c < 8; c++) {
        for (let l = 0; l < 8; l++) {
            tabuleiro[c][l].cor = 'brown';
        }
    }


    for (let c = 0; c <= 8; c++) {
        for (let l = 0; l < 8; l++) {
            if (verificaCasa(mx, my, c, l) && !tabuleiro[c][l].peca && jogada.ativo) {
                tabuleiro[c][l].selected = true;
                jogada.casa.c = c;
                jogada.casa.l = l;
                moverPeca();
            } else {
                tabuleiro[c][l].selected = false;
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

function verificaCasa(mx, my, c, l) {
    if (mx > tabuleiro[c][l].x && mx < tabuleiro[c][l].x + tabuleiro[c][l].w && my > tabuleiro[c][l].y && my < tabuleiro[c][l].y + tabuleiro[c][l].h) {
        return true;
    } else {
        return false;
    }
}