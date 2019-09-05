function diagonalDireitaBranca() {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                previsaoJogada.nivel = 0;
                idJogada++;
                previsaoJogada.id = idJogada;
                return true;
            }
            if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua direita`);
                verificaFrenteDireitaBranco();
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
            if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                previsaoJogada.nivel = 0;
                idJogada++;
                previsaoJogada.id = idJogada;
                return true;
            }
            if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua esquerda`);
                verificaFrenteEsquerdaBranco();
            }
        }
    } else {
        return false;
    }
}