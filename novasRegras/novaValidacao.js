function percorrerPecas() {
    //PERCORRENDO ARRAY PARA VERIFICAR AS BRANCAS
    if (jogada.jogador == 'white') {
        for (let i = 0; i < pecas.length; i++) {
            if (pecas[i].cor == 'white') {
                idJogada++;
                previsaoJogada = newJogada(idJogada, i);
                previsaoJogada.peca = i;
                previsaoJogada.origem.c = pecas[i].casa.c;
                previsaoJogada.origem.l = pecas[i].casa.l;
                previsaoJogada.id = idJogada;

                //chamar primeira validação
                if (diagonalDireita()) {
                    jogadasPossiveis.push(previsaoJogada);
                }

                if (diagonalEsquerda()) {
                    jogadasPossiveis.push(previsaoJogada);
                }
            }
        }
    }
    /*
    //PERCORRENDO ARRAY PARA VERIFICAR AS PRETAS
    if (jogada.jogador == 'black') {
        for (let i = 0; i < pecas.length; i++) {
            if (pecas[i].cor == 'black') {
                previsaoJogada.peca = i;
                idjogada++;
                previsaoJogada.id = idJogada;
                //chamar primeira validação
            }
        }
    }
    */
}