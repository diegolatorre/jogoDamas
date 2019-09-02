function Jogada(id, peca) {
    this.id = id;
    this.peca = peca;
    this.origem = { c: pecas[peca].casa.c, l: null};
    this.destino = { c: null, l: null };
    this.nivel = 0;
    this.proximaJogada = 0;
}

function newJogada(id, peca, array) {
    var previsaoJogada = new Jogada(id, peca);
    return previsaoJogada;
}

