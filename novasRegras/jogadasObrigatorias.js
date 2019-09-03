function verificaFrenteDireita() {

    jogadasObrigatorias.push(previsaoJogada);
    var novaJogada = novaJogada();
    jogadasObrigatorias[jogadasObrigatorias.indexOf(previsaoJogada)].proximaJogada.push(novaJogada);
    novaJogada.origem.c = previsaoJogada.destino.c;
    novaJogada.origem.c = previsaoJogada.destino.l;
}