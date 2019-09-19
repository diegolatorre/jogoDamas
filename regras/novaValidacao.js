function percorrerPecas() {
    //PERCORRENDO ARRAY PARA VERIFICAR AS BRANCAS

    if (ultimaPeca || ultimaPeca == 0) {
        if (jogada.jogador == 'white') {
            for (let i = 0; i < pecas.length; i++) {
                if (pecas[i] && i == ultimaPeca) {
                    if (pecas[i].cor == 'white') {

                        validaPecas(i);

                    }
                }
            }
            previsaoJogada = null;
        }

        if (jogada.jogador == 'black') {
            for (let i = 0; i < pecas.length; i++) {
                if (pecas[i] && i == ultimaPeca) {
                    if (pecas[i].cor == 'black') {

                        validaPecas(i);

                    }
                }
            }
        }
    } else {
        if (jogada.jogador == 'white') {
            for (let i = 0; i < pecas.length; i++) {
                if (pecas[i]) {
                    if (pecas[i].cor == 'white') {

                        if (pecas[i].superDama) {
                            validaPecasDama(i);
                        } else {
                            validaPecas(i);
                        }

                    }
                }
            }
            previsaoJogada = null;
        }

        if (jogada.jogador == 'black') {
            for (let i = 0; i < pecas.length; i++) {
                if (pecas[i]) {
                    if (pecas[i].cor == 'black') {

                        if (pecas[i].superDama) {
                            validaPecasDama(i);
                        } else {
                            validaPecas(i);
                        }

                    }
                }
            }
        }
    }
    previsaoJogada = null;
}

function validaPecas(i) {
    previsaoJogada = newJogada(i);
    previsaoJogada.peca = i;
    previsaoJogada.origem.c = pecas[i].casa.c;
    previsaoJogada.origem.l = pecas[i].casa.l;

    //chamar primeira validação
    if (diagonalSubirDireita()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = newJogada(i);
        previsaoJogada.origem.c = pecas[i].casa.c;
        previsaoJogada.origem.l = pecas[i].casa.l;
    }

    if (diagonalSubirEsquerda()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = newJogada(i);
        previsaoJogada.origem.c = pecas[i].casa.c;
        previsaoJogada.origem.l = pecas[i].casa.l;
    }

    if (diagonalDescerDireita()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = newJogada(i);
        previsaoJogada.origem.c = pecas[i].casa.c;
        previsaoJogada.origem.l = pecas[i].casa.l;
    }

    if (diagonalDescerEsquerda()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = null;
    }
}

function validaPecasDama(i) {
    previsaoJogada = newJogada(i);
    previsaoJogada.peca = i;
    previsaoJogada.origem.c = pecas[i].casa.c;
    previsaoJogada.origem.l = pecas[i].casa.l;

    //chamar primeira validação
    if (diagonalSubirDireitaDama()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = newJogada(i);
        previsaoJogada.origem.c = pecas[i].casa.c;
        previsaoJogada.origem.l = pecas[i].casa.l;
    }

    if (diagonalSubirEsquerdaDama()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = newJogada(i);
        previsaoJogada.origem.c = pecas[i].casa.c;
        previsaoJogada.origem.l = pecas[i].casa.l;
    }

    if (diagonalDescerDireitaDama()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = newJogada(i);
        previsaoJogada.origem.c = pecas[i].casa.c;
        previsaoJogada.origem.l = pecas[i].casa.l;
    }

    if (diagonalDescerEsquerdaDama()) {
        jogadasPossiveis.push(previsaoJogada);
        previsaoJogada = null;
    }
}