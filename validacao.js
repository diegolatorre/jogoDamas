function validaBranca() {
    var quantidadeCasasLinha = Math.abs(jogada.casa.l - pecas[jogada.peca].casa.l);
    var quantidadeCasasColuna = Math.abs(jogada.casa.c - pecas[jogada.peca].casa.c);

    console.log(quantidadeCasasLinha);

    //Valida jogada pra frente
    if (pecas[jogada.peca].casa.l >= jogada.casa.l) {
        if (validaAndarUmBranco(quantidadeCasasLinha, quantidadeCasasColuna) || validaComerUmBranco(quantidadeCasasLinha, quantidadeCasasColuna)) {
            superDamaBranca();
            moverPeca();
        }
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida, tente outra casa';
    }
}

function validaPreta() {
    var quantidadeCasasLinha = Math.abs(jogada.casa.l - pecas[jogada.peca].casa.l);
    var quantidadeCasasColuna = Math.abs(jogada.casa.c - pecas[jogada.peca].casa.c);

    console.log(quantidadeCasasLinha);

    //Valida jogada pra frente
    if (pecas[jogada.peca].casa.l <= jogada.casa.l && quantidadeCasasLinha == 1 && quantidadeCasasColuna == 1) {
        if (jogada.casa.l == 7) {
            pecas[jogada.peca].superDama = true;
        }
        moverPeca();
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida, tente outra casa';
    }
}

function validaComerUmBranco(quantidadeCasasLinha, quantidadeCasasColuna) {
    if (pecas[jogada.peca].casa.l >= jogada.casa.l && quantidadeCasasLinha == 2 && quantidadeCasasColuna == 2) {
        if (!tabuleiro[jogada.casa.c - 1][jogada.casa.l + 1]) {
            return false;
        }

        if (pecas[tabuleiro[jogada.casa.c - 1][jogada.casa.l + 1].peca].cor == 'black') {
            return true;
        }
    }
}

function validaAndarUmBranco(quantidadeCasasLinha, quantidadeCasasColuna) {
    if (quantidadeCasasLinha == 1 && quantidadeCasasColuna == 1) {
        return true;
    } else {
        return false;
    }
}

function superDamaBranca() {
    if (jogada.casa.l == 0) {
        pecas[jogada.peca].superDama = true;
    }
}