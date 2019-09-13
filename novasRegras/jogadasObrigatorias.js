function verificaSubirDireita() {
    if (typeof tabuleiro[previsaoJogada.destino.c + 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1].peca && tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l - 1].peca !== 0) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c += 1;
                previsaoJogada.destino.l -= 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a direita`);
            }
        }
    }
}

function verificaSubirEsquerda() {
    if (typeof tabuleiro[previsaoJogada.destino.c - 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1].peca && tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l - 1].peca !== 0) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c -= 1;
                previsaoJogada.destino.l -= 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a esquerda`);
            }
        }
    }
}

function verificaDescerDireita() {
    if (typeof tabuleiro[previsaoJogada.destino.c - 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c - 1][previsaoJogada.destino.l + 1].peca) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c -= 1;
                previsaoJogada.destino.l += 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a direita`);
            }
        }
    }
}

function verificaDescerEsquerda() {
    if (typeof tabuleiro[previsaoJogada.destino.c + 1] !== 'undefined') {
        if (typeof tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1] !== 'undefined') {
            if (!tabuleiro[previsaoJogada.destino.c + 1][previsaoJogada.destino.l + 1].peca) {
                previsaoJogada.pecaEliminar = tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca;
                previsaoJogada.destino.c += 1;
                previsaoJogada.destino.l += 1;
                jogadasObrigatorias.push(previsaoJogada);
                previsaoJogada = newJogada(previsaoJogada.peca);
                console.log(`atencao peca ${previsaoJogada.peca} obrigatorio comer peça a esquerda`);
            }
        }
    }
}