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
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a direita`);
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
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a esquerda`);
            }
        }
    }
}

function verificaFrenteDireitaPreta() {
    if (typeof tabuleiro[previsaoJogada.destino.c - 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1].peca) {
                previsaoJogada.destino.c -= 1;
                previsaoJogada.destino.l += 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                previsaoJogada.origem.c = pecas[previsaoJogada.peca].casa.c;
                previsaoJogada.origem.l = pecas[previsaoJogada.peca].casa.l;
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a direita`);
            }
        }
    }
}

function verificaFrenteEsquerdaPreta() {
    if (typeof tabuleiro[previsaoJogada.destino.c + 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1].peca) {
                previsaoJogada.destino.c += 1;
                previsaoJogada.destino.l += 1;
                jogadasObrigatorias.push(previsaoJogada);
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a esquerda`);
            }
        }
    }
}