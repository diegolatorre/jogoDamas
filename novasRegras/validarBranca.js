function diagonalDireitaBranca() {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca) {
                previsaoJogada.nivel = 0;
                idJogada++;
                previsaoJogada.id = idJogada;
                return true;
            }
            if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                console.log(`atencao peca ${previsaoJogada.peca} casa preta a sua direita`);
            }
        }
    } else {
        return false;
    }
}

function diagonalEsquerdaBranca() {
    previsaoJogada.destino.c = previsaoJogada.origem.c - 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca) {
                previsaoJogada.nivel = 0;
                idJogada++;
                previsaoJogada.id = idJogada;
                return true;
            }
            if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                console.log(`atencao peca ${previsaoJogada.peca} casa preta a sua esquerda`);
            }
        }
    } else {
        return false;
    }
}