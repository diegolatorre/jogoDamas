function diagonalDireitaPreta() {
    previsaoJogada.destino.c = previsaoJogada.origem.c - 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l + 1;

    if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                previsaoJogada.nivel = 0;
                return true;
            }
        }
    } else {
        return false;
    }
}

function diagonalEsquerdaPreta() {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l + 1;

    if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                previsaoJogada.nivel = 0;
                return true;
            }
        }
    } else {
        return false;
    }
}