function onClick(ev) {

    if (jogada.jogador == escolhaJogador || doisJogadores) {
        console.log(ev.x);
        var mx = ev.x - canvas.offsetLeft;
        var my = ev.y - canvas.offsetTop;

        for (var i = 0; i < 24; i++) {
            if (pecas[i]) {
                if (verificaPeca(mx, my, i)) {
                    if (pecas[i].cor == jogada.jogador) {
                        jogada.peca = i;
                        jogada.casaOrigem.c = pecas[i].casa.c;
                        jogada.casaOrigem.l = pecas[i].casa.l;
                        jogada.ativo = true;
                        pecas[i].selected = true;
                        socket.emit('pecas', { from: socket.id, to: roomName, msg: JSON.stringify(pecas) });
                        console.log(i);
                    }
                } else {
                    pecas[i].selected = false;
                }
            }
        }

        if (jogada.ativo) {
            for (let c = 0; c < 8; c++) {
                for (let l = 0; l < 8; l++) {
                    if (verificaCasa(mx, my, c, l) && !tabuleiro[c][l].peca) {
                        tabuleiro[c][l].selected = true;
                        jogada.casa.c = c;
                        jogada.casa.l = l;
                        validaJogada();
                        //moverPeca();
                    } else {
                        tabuleiro[c][l].selected = false;
                    }
                }
            }
        }
    }


}

function verificaPeca(mx, my, i) {

    if (escolhaJogador == 'black') {
        if (mx > tabuleiro[7 - pecas[i].casa.c][7 - pecas[i].casa.l].x && mx < tabuleiro[7 - pecas[i].casa.c][7 - pecas[i].casa.l].x + tabuleiro[7 - pecas[i].casa.c][7 - pecas[i].casa.l].w && my > tabuleiro[7 - pecas[i].casa.c][7 - pecas[i].casa.l].y && my < tabuleiro[7 - pecas[i].casa.c][7 - pecas[i].casa.l].y + tabuleiro[7 - pecas[i].casa.c][7 - pecas[i].casa.l].h) {
            return true;
        } else {
            return false;
        }
    } else {
        if (mx > tabuleiro[pecas[i].casa.c][pecas[i].casa.l].x && mx < tabuleiro[pecas[i].casa.c][pecas[i].casa.l].x + tabuleiro[pecas[i].casa.c][pecas[i].casa.l].w && my > tabuleiro[pecas[i].casa.c][pecas[i].casa.l].y && my < tabuleiro[pecas[i].casa.c][pecas[i].casa.l].y + tabuleiro[pecas[i].casa.c][pecas[i].casa.l].h) {
            return true;
        } else {
            return false;
        }
    }


    /*if (mx <= pecas[i].x + pecas[i].r && mx >= pecas[i].x - pecas[i].r && my <= pecas[i].y + pecas[i].r && my >= pecas[i].y - pecas[i].r) {
        return true;
    } else {
        return false;
    }*/
}

function verificaCasa(mx, my, c, l) {

    if (escolhaJogador == 'black') {
        if (mx > tabuleiro[7 - c][7 - l].x && mx < tabuleiro[7 - c][7 - l].x + tabuleiro[7 - c][7 - l].w && my > tabuleiro[7 - c][7 - l].y && my < tabuleiro[7 - c][7 - l].y + tabuleiro[7 - c][7 - l].h) {
            return true;
        } else {
            return false;
        }
    } else {
        if (mx > tabuleiro[c][l].x && mx < tabuleiro[c][l].x + tabuleiro[c][l].w && my > tabuleiro[c][l].y && my < tabuleiro[c][l].y + tabuleiro[c][l].h) {
            return true;
        } else {
            return false;
        }
    }

}