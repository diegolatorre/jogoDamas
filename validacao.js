function validaJogada() {

    if (jogadasObrigatorias.length > 0) {
        for (let i = 0; i < jogadasObrigatorias.length; i++) {
            if (jogada.peca == jogadasObrigatorias[i].peca && jogada.casa.c == jogadasObrigatorias[i].destino.c && jogada.casa.l == jogadasObrigatorias[i].destino.l) {
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

    /*
    var quantidadeCasasLinha = Math.abs(jogada.casa.l - pecas[jogada.peca].casa.l);
    var quantidadeCasasColuna = Math.abs(jogada.casa.c - pecas[jogada.peca].casa.c);

    console.log(quantidadeCasasLinha);

    //Valida jogada pra frente
    if (pecas[jogada.peca].casa.l >= jogada.casa.l) {
        if (validaAndarUmBranco(quantidadeCasasLinha, quantidadeCasasColuna) || validaComerUmBranco(quantidadeCasasLinha, quantidadeCasasColuna)) {
            superDamaBranca();
            moverPeca();
        }
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida, tente outra casa';
    }*/
}

function superDamaBranca() {
    if (jogada.casa.l == 0) {
        pecas[jogada.peca].superDama = true;
    }
}