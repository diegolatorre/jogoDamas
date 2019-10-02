function validaJogada() {

    if (jogadasObrigatorias.length > 0) {
        for (let i = 0; i < jogadasObrigatorias.length; i++) {
            if (jogada.peca == jogadasObrigatorias[i].peca && jogada.casa.c == jogadasObrigatorias[i].destino.c && jogada.casa.l == jogadasObrigatorias[i].destino.l) {
                //pecas[jogadasObrigatorias[i].pecaEliminar].cor = "#f542e0";
                tabuleiro[pecas[jogadasObrigatorias[i].pecaEliminar].casa.c][pecas[jogadasObrigatorias[i].pecaEliminar].casa.l].peca = null;
                pecas[jogadasObrigatorias[i].pecaEliminar] = null;
                superDama();
                moverPeca();
            } else {
                document.getElementById("jogador").innerHTML = 'Jogadas Obrigatorias a fazer';
            }
        }
    } else if (jogadasPossiveis.length > 0) {
        for (let i = 0; i < jogadasPossiveis.length; i++) {
            if (jogada.peca == jogadasPossiveis[i].peca && jogada.casa.c == jogadasPossiveis[i].destino.c && jogada.casa.l == jogadasPossiveis[i].destino.l) {
                superDama();
                moverPeca();
            } else {
                document.getElementById("jogador").innerHTML = 'Jogadas a fazer';
            }
        }
    } else {
        jogoFinalizado();
    }
}

function superDama() {
    if (pecas[jogada.peca].cor == 'white') {
        if (jogada.casa.l == 0) {
            pecas[jogada.peca].superDama = true;
        }
    }

    if (pecas[jogada.peca].cor == 'black') {
        if (jogada.casa.l == 7) {
            pecas[jogada.peca].superDama = true;
        }
    }
}

function diagonalDescerDireita(i) {
    previsaoJogada.destino.c = previsaoJogada.origem.c - 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l + 1;

    if (pecas[previsaoJogada.peca].cor == 'black') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = newJogada(i);
                    previsaoJogada.origem.c = pecas[i].casa.c;
                    previsaoJogada.origem.l = pecas[i].casa.l;
                    return;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                    verificaDescerDireita(i);
                }
            }
        } else {
            return false;
        }
    }

    if (pecas[previsaoJogada.peca].cor == 'white') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined' && (tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca || tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca == 0)) {
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua direita`);
                    verificaDescerDireita(i);
                }
            }
        } else {
            return false;
        }
    }
}


function diagonalDescerEsquerda(i) {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l + 1;

    if (pecas[previsaoJogada.peca].cor == 'black') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = newJogada(i);
                    previsaoJogada.origem.c = pecas[i].casa.c;
                    previsaoJogada.origem.l = pecas[i].casa.l;
                    return;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua esquerda`);
                    verificaDescerEsquerda(i);
                }
            }
        } else {
            return false;
        }
    }

    if (pecas[previsaoJogada.peca].cor == 'white') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined' && (tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca || tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca == 0)) {
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua esquerda`);
                    verificaDescerEsquerda(i);
                }
            }
        } else {
            return false;
        }
    }
}


function diagonalSubirDireita(i) {
    previsaoJogada.destino.c = previsaoJogada.origem.c + 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (pecas[previsaoJogada.peca].cor == 'white') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = newJogada(i);
                    previsaoJogada.origem.c = pecas[i].casa.c;
                    previsaoJogada.origem.l = pecas[i].casa.l;
                    return;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua direita`);
                    verificaSubirDireita(i);
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
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                    verificaSubirDireita(i);
                }
            }
        } else {
            return false;
        }
    }
}

function diagonalSubirEsquerda(i) {
    previsaoJogada.destino.c = previsaoJogada.origem.c - 1;
    previsaoJogada.destino.l = previsaoJogada.origem.l - 1;

    if (pecas[previsaoJogada.peca].cor == 'white') {
        if (typeof tabuleiro[previsaoJogada.destino.c] !== 'undefined') {
            if (typeof tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l] !== 'undefined') {
                if (!tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca && tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca !== 0) {
                    previsaoJogada.nivel = 0;
                    idJogada++;
                    previsaoJogada.id = idJogada;
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = newJogada(i);
                    previsaoJogada.origem.c = pecas[i].casa.c;
                    previsaoJogada.origem.l = pecas[i].casa.l;
                    return;
                }
                if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                    console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua esquerda`);
                    verificaSubirEsquerda(i);
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
                    console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua esquerda`);
                    verificaSubirEsquerda(i);
                }
            }
        } else {
            return false;
        }
    }
}