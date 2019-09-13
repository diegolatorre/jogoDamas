function validaJogada() {

    if (jogadasObrigatorias.length > 0) {
        for (let i = 0; i < jogadasObrigatorias.length; i++) {
            if (jogada.peca == jogadasObrigatorias[i].peca && jogada.casa.c == jogadasObrigatorias[i].destino.c && jogada.casa.l == jogadasObrigatorias[i].destino.l) {
                //pecas[jogadasObrigatorias[i].pecaEliminar].cor = "#f542e0";
                tabuleiro[pecas[jogadasObrigatorias[i].pecaEliminar].casa.c][pecas[jogadasObrigatorias[i].pecaEliminar].casa.l].peca = null;
                pecas[jogadasObrigatorias[i].pecaEliminar] = null;
                superDamaBranca();
                moverPeca();
            } else {
                document.getElementById("jogador").innerHTML = 'Jogadas Obrigatorias a fazer';
            }
        }
    } else {
        for (let i = 0; i < jogadasPossiveis.length; i++) {
            if (jogada.peca == jogadasPossiveis[i].peca && jogada.casa.c == jogadasPossiveis[i].destino.c && jogada.casa.l == jogadasPossiveis[i].destino.l) {
                superDamaBranca();
                moverPeca();
            } else {
                document.getElementById("jogador").innerHTML = 'Jogadas a fazer';
            }
        }
    }
}

function superDamaBranca() {
    if (jogada.casa.l == 0) {
        pecas[jogada.peca].superDama = true;
    }
}

function diagonalDescerDireita() {
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
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined' && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca) {
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black' ) {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                    verificaDescerDireita();
                }
            }
        } else {
            return false;
        }
    }
}


function diagonalDescerEsquerda() {
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
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined' && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca) {
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


function diagonalSubirDireita() {
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
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined' && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca) {
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

function diagonalSubirEsquerda() {
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
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined' && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca) {
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