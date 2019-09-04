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