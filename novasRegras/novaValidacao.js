function percorrerPecas() {
    //PERCORRENDO ARRAY PARA VERIFICAR AS BRANCAS
    if (jogada.jogador == 'white') {
        for (let i = 0; i < pecas.length; i++) {
            if (pecas[i].cor == 'white') {

                previsaoJogada = newJogada(i);
                previsaoJogada.peca = i;
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;


                //chamar primeira validação
                if (diagonalDireitaBranca()) {
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = newJogada(i);
                    previsaoJogada.peca = i;
                    previsaoJogada.origem.c = pecas[i].casa.c;
                    previsaoJogada.origem.l = pecas[i].casa.l;
                }

                if (diagonalEsquerdaBranca()) {
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = null;
                }
            }
        }
    }

    if (jogada.jogador == 'black') {
        for (let i = 0; i < pecas.length; i++) {
            if (pecas[i].cor == 'black') {

                previsaoJogada = newJogada(i);
                previsaoJogada.peca = i;
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;

                //chamar primeira validação
                if (diagonalDireitaPreta()) {
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = newJogada(i);
                    previsaoJogada.peca = i;
                    previsaoJogada.origem.c = pecas[i].casa.c;
                    previsaoJogada.origem.l = pecas[i].casa.l;
                }

                if (diagonalEsquerdaPreta()) {
                    jogadasPossiveis.push(previsaoJogada);
                    previsaoJogada = null;
                }
            }
        }
    }
}