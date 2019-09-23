function diagonalDescerDireitaDama() {
    previsaoJogada.destino.c = previsaoJogada.origem.c - 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l + 1;

    if (pecas[previsaoJogada.peca].cor == 'black') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    return true;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                    verificaDescerDireita();
                }
            }
        } else {
            return false;
        }
    }

    if (pecas[previsaoJogada.peca].cor == 'white') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    return true;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                    verificaDescerDireita();
                }
            }
        } else {
            return false;
        }
    }
}


function diagonalDescerEsquerdaDama() {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l + 1;

    if (pecas[previsaoJogada.peca].cor == 'black') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    return true;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua esquerda`);
                    verificaDescerEsquerda();
                }
            }
        } else {
            return false;
        }
    }

    if (pecas[previsaoJogada.peca].cor == 'white') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    return true;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua esquerda`);
                    verificaDescerEsquerda();
                }
            }
        } else {
            return false;
        }
    }
}


function diagonalSubirDireitaDama() {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (pecas[previsaoJogada.peca].cor == 'white') {
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
                    verificaSubirDireita();
                }
            }
        } else {
            return false;
        }
    }

    if (pecas[previsaoJogada.peca].cor == 'black') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    return true;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua direita`);
                    verificaSubirDireita();
                }
            }
        } else {
            return false;
        }
    }
}

function diagonalSubirEsquerdaDama() {
    previsaoJogada.destino.c = previsaoJogada.origem.c - 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (pecas[previsaoJogada.peca].cor == 'white') {
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
                    verificaSubirEsquerda();
                }
            }
        } else {
            return false;
        }
    }

    if (pecas[previsaoJogada.peca].cor == 'black') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    return true;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua esquerda`);
                    verificaSubirEsquerda();
                }
            }
        } else {
            return false;
        }
    }
}