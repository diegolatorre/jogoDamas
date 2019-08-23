function validaBranca() {
    var quantidadeCasasLinha = Math.abs(jogada.casa.l - pecas[jogada.peca].casa.l);
    var quantidadeCasasColuna = Math.abs(jogada.casa.c - pecas[jogada.peca].casa.c);

    console.log(quantidadeCasasLinha);

    //Valida jogada pra frente
    if (pecas[jogada.peca].casa.l >= jogada.casa.l && quantidadeCasasLinha == 1 && quantidadeCasasColuna == 1) {
        if (jogada.casa.l == 0) {
            pecas[jogada.peca].superDama = true; 
        }
        moverPeca();
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida';
    }

}

function validaPreta() {
    var quantidadeCasasLinha = Math.abs(jogada.casa.l - pecas[jogada.peca].casa.l);
    var quantidadeCasasColuna = Math.abs(jogada.casa.c - pecas[jogada.peca].casa.c);

    console.log(quantidadeCasasLinha);

    //Valida jogada pra frente
    if (pecas[jogada.peca].casa.l <= jogada.casa.l && quantidadeCasasLinha == 1 && quantidadeCasasColuna == 1) {
        if (jogada.casa.l == 7) {
            pecas[jogada.peca].superDama = true; 
        }
        moverPeca();
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida';
    }


}