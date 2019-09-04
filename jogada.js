function Jogada(peca) {
    this.id = null;
    this.peca = peca;
    this.pecaEliminar = null;
    this.origem = { c: null, l: null};
    this.destino = { c: null, l: null };
    this.nivel = 0;
    this.proximaJogada = [];
}

function newJogada(peca) {
    var previsaoJogada = new Jogada(peca);
    return previsaoJogada;
}