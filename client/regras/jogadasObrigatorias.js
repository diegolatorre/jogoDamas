function verificaSubirDireita(i) {
    if (typeof tabuleiro[previsaoJogada.destino.c + 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1].peca && tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1].peca !== 0) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c += 1;
                previsaoJogada.destino.l -= 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;
            }
        }
    }
}

function verificaSubirEsquerda(i) {
    if (typeof tabuleiro[previsaoJogada.destino.c - 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1].peca && tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1].peca !== 0) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c -= 1;
                previsaoJogada.destino.l -= 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;
            }
        }
    }
}

function verificaDescerDireita(i) {
    if (typeof tabuleiro[previsaoJogada.destino.c - 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1].peca && tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1].peca !== 0) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c -= 1;
                previsaoJogada.destino.l += 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;
            }
        }
    }
}

function verificaDescerEsquerda(i) {
    if (typeof tabuleiro[previsaoJogada.destino.c + 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1].peca && tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1].peca !== 0) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c += 1;
                previsaoJogada.destino.l += 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;
            }
        }
    }
}