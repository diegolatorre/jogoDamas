function diagonalDescerDireitaDama(i) {
    var cont = 1;
    previsaoJogada.destino.c = previsaoJogada.origem.c - cont;
    previsaoJogada.destino.l = previsaoJogada.origem.l + cont;

    while ((previsaoJogada.destino.c >= 0 && previsaoJogada.destino.c <= 7) && (previsaoJogada.destino.l >= 0 && previsaoJogada.destino.l <= 7)) {
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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                        verificaDescerDireita(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        return;
                    }

                }
            } else {

            }
        }

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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua direita`);
                        verificaDescerDireita(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        return;
                    }
                }
            } else {

            }
        }
        cont++;
        previsaoJogada.destino.c = previsaoJogada.origem.c - cont;
        previsaoJogada.destino.l = previsaoJogada.origem.l + cont;
    }
}




function diagonalDescerEsquerdaDama(i) {
    var cont = 1;
    previsaoJogada.destino.c = previsaoJogada.origem.c + cont;
    previsaoJogada.destino.l = previsaoJogada.origem.l + cont;


    while ((previsaoJogada.destino.c >= 0 && previsaoJogada.destino.c <= 7) && (previsaoJogada.destino.l >= 0 && previsaoJogada.destino.l <= 7)) {
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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua esquerda`);
                        verificaDescerEsquerda(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        return;
                    }
                }
            } else {

            }
        }

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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca branca a sua esquerda`);
                        verificaDescerEsquerda(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        return;
                    }
                }
            } else {

            }
        }
        cont++;
        previsaoJogada.destino.c = previsaoJogada.origem.c + cont;
        previsaoJogada.destino.l = previsaoJogada.origem.l + cont;
    }

}


function diagonalSubirDireitaDama(i) {
    var cont = 1;
    previsaoJogada.destino.c = previsaoJogada.origem.c + cont;
    previsaoJogada.destino.l = previsaoJogada.origem.l - cont;

    while ((previsaoJogada.destino.c >= 0 && previsaoJogada.destino.c <= 7) && (previsaoJogada.destino.l >= 0 && previsaoJogada.destino.l <= 7)) {
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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua direita`);
                        verificaSubirDireita(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        return;
                    }
                }
            } else {

            }
        }

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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua direita`);
                        verificaSubirDireita(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        return;
                    }
                }
            } else {

            }
        }
        cont++;
        previsaoJogada.destino.c = previsaoJogada.origem.c + cont;
        previsaoJogada.destino.l = previsaoJogada.origem.l - cont;
    }
}

function diagonalSubirEsquerdaDama(i) {
    var cont = 1;
    previsaoJogada.destino.c = previsaoJogada.origem.c - cont;
    previsaoJogada.destino.l = previsaoJogada.origem.l - cont;

    while ((previsaoJogada.destino.c >= 0 && previsaoJogada.destino.c <= 7) && (previsaoJogada.destino.l >= 0 && previsaoJogada.destino.l <= 7)) {
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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua esquerda`);
                        verificaSubirEsquerda(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        return;
                    }
                }
            } else {

            }
        }

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
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'white') {
                        console.log(`atencao peca ${previsaoJogada.peca} peca preta a sua esquerda`);
                        verificaSubirEsquerda(i);
                        return;
                    } else if (pecas[tabuleiro[previsaoJogada.destino.c][previsaoJogada.destino.l].peca].cor == 'black') {
                        return;
                    }
                }
            } else {

            }
        }
        cont++;
        previsaoJogada.destino.c = previsaoJogada.origem.c - cont;
        previsaoJogada.destino.l = previsaoJogada.origem.l - cont;
    }
}