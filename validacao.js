function validaBranca() {
    if (pecas[jogada.peca].casa.l >= jogada.casa.l){
        moverPeca();
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida';
    }
}

function validaPreta() {
    if (pecas[jogada.peca].casa.l <= jogada.casa.l){
        moverPeca();
    } else {
        document.getElementById("jogador").innerHTML = 'Jogada nao permitida';
    }
}