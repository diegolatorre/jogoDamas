function onClick(ev) {
    var mx = ev.x;
    var my = ev.y;

    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            tabuleiro[j][i].cor = 'brown';
        }
    }

    //PECA BRANCAS
    for (var i = 0; i < 8; i++) {
        let peca = brancas[i];
        if (mx <= peca.x + peca.r && mx >= peca.x - peca.r && my <= peca.y + peca.r && my >= peca.y - peca.r) {
            peca.selected = 1;
            mostrarJogadasBrancas(peca);
            pecaSelected = peca;
        } else {

        }
    }

    //PECA PRETAS
    for (var i = 0; i < 8; i++) {
        let peca = pretas[i];
        if (mx <= peca.x + peca.r && mx >= peca.x - peca.r && my <= peca.y + peca.r && my >= peca.y - peca.r) {
            peca.selected = 1;
            mostrarJogadasPretas(peca);
        } else {

        }
    }
}

function verificaCasa(mx, my) {
    for (let j = 0; j <= 8; j++) {
        for (let i = 0; i < 8; i++) {
            let rect = tabuleiro[j][i];
            if (mx > rect.x && mx < rect.x + rect.w
                && my > rect.y && my < rect.y + rect.h) {
                //moverPeca(rect, pecaSelected);
                return rect;
            } else {

            }
        }
    }
}