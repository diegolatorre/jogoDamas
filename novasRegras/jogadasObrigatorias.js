function verificaFrenteDireitaBranco() {
    if (typeof tabuleiro[previsaoJogada.destino.c + 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1].peca) {
                previsaoJogada.destino.c += 1;
                previsaoJogada.destino.l -= 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                previsaoJogada.origem.c = pecas[previsaoJogada.peca].casa.c;
                previsaoJogada.origem.l = pecas[previsaoJogada.peca].casa.l;
            }
        }
    }
}

function verificaFrenteEsquerdaBranco() {
    if (typeof tabuleiro[previsaoJogada.destino.c - 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1].peca) {
                previsaoJogada.destino.c -= 1;
                previsaoJogada.destino.l -= 1;
                jogadasObrigatorias.push(previsaoJogada);
            }
        }
    }
}