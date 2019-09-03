function Peca(x, y, c, l, cor) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.selected = false;
    this.casa = { c: c, l: l };
    this.cor = cor;
    this.superDama = false;
}

function newPeca(c, l, cor) {
    var peca = new Peca(tabuleiro[c][l].x + 25, tabuleiro[c][l].y + 25, c, l, cor);
    pecas.push(peca);
    tabuleiro[c][l].peca = pecas.indexOf(peca);
}

function drawPeca(ctx, i) {
    ctx.beginPath();

    if (pecas[i].selected) {
        ctx.lineWidth = 10;
        ctx.fillStyle = 'pink';
    } else {
        ctx.fillStyle = pecas[i].cor;
        ctx.lineWidth = 01;
    }

    ctx.arc(pecas[i].x, pecas[i].y, pecas[i].r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fillText(`${i}`, pecas[i].x-5, pecas[i].y);
    ctx.closePath();
}

function moverPeca() {

    //preenchendo log das jogadas
    log();

    //limpando a selecao de peca e casa
    pecas[jogada.peca].selected = false;
    tabuleiro[jogada.casa.c][jogada.casa.l].selected = false;

    //movendo a peca no tabuleiro
    pecas[jogada.peca].x = tabuleiro[jogada.casa.c][jogada.casa.l].x + 25;
    pecas[jogada.peca].y = tabuleiro[jogada.casa.c][jogada.casa.l].y + 25;

    //limpando na casa antiga o valor da peca
    tabuleiro[pecas[jogada.peca].casa.c][pecas[jogada.peca].casa.l].peca = null;

    //colocando o valor da nova casa na peca
    pecas[jogada.peca].casa.c = jogada.casa.c;
    pecas[jogada.peca].casa.l = jogada.casa.l;

    //colocando o valor da peca na nova casa
    tabuleiro[jogada.casa.c][jogada.casa.l].peca = jogada.peca;

    //limpando a jogada
    jogada.peca = null;
    jogada.casa.c = null;
    jogada.casa.l = null;
    jogada.ativo = false;

    //altera quem é a vez de jogar
    if (jogada.jogador == 'white') {
        jogada.jogador = 'black';
        document.getElementById("jogador").innerHTML = 'Pretas';
    } else {
        jogada.jogador = 'white';
        document.getElementById("jogador").innerHTML = 'Brancas';
    }

    jogadasPossiveis = [];
    percorrerPecas();
}

function moverPecaCOmputador() {

    //preenchendo log das jogadas
    log();

    //movendo a peca no tabuleiro
    pecas[jogada.peca].x = tabuleiro[jogada.casa.c][jogada.casa.l].x + 25;
    pecas[jogada.peca].y = tabuleiro[jogada.casa.c][jogada.casa.l].y + 25;

    //limpando na casa antiga o valor da peca
    tabuleiro[pecas[jogada.peca].casa.c][pecas[jogada.peca].casa.l].peca = null;

    //colocando o valor da nova casa na peca
    pecas[jogada.peca].casa.c = jogada.casa.c;
    pecas[jogada.peca].casa.l = jogada.casa.l;

    //colocando o valor da peca na nova casa
    tabuleiro[jogada.casa.c][jogada.casa.l].peca = jogada.peca;

    //limpando a jogada
    jogada.peca = null;
    jogada.casa.c = null;
    jogada.casa.l = null;
    jogada.ativo = false;

    //altera quem é a vez de jogar
    if (jogada.jogador == 'white') {
        jogada.jogador = 'black';
        document.getElementById("jogador").innerHTML = 'Pretas';
    } else {
        jogada.jogador = 'white';
        document.getElementById("jogador").innerHTML = 'Brancas';
    }

    jogadasPossiveis = [];
    percorrerPecas();
}

function log() {
    logJogadas += `\n\nJOGADA N°${countJogadas} \nJogador: ${jogada.jogador}\nPeça n°: ${jogada.peca}\nCasa Origem: coluna: ${jogada.casaOrigem.c} linha: ${jogada.casaOrigem.l}\nCasa destino: coluna: ${jogada.casa.c} linha: ${jogada.casa.l}`;

    // Buscar elemento pai
    var elemento_pai = document.getElementById("jogadas");

    // Criar elemento
    var titulo = document.createElement('p');

    // Criando o nó de texto de outra forma
    titulo.innerHTML = `<br />JOGADA N°${countJogadas} <br />Jogador: ${jogada.jogador}<br />Peça n°: ${jogada.peca}<br />Casa Origem: coluna: ${jogada.casaOrigem.c} linha: ${jogada.casaOrigem.l}<br />Casa destino: coluna: ${jogada.casa.c} linha: ${jogada.casa.l}`;

    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(titulo);

    for (let i = 0; i < pecas.length; i++) {
        if (pecas[i].cor == 'white') {
            countPecasBrancas++;
        }

        if (pecas[i].cor == 'black') {
            countPecasPretas++;
        }

        if (pecas[i].cor == 'white' && pecas[i].superDama) {
            countDamasBrancas++;
        }

        if (pecas[i].cor == 'black' && pecas[i].superDama) {
            countDamasPretas++;
        }

    }
    document.getElementById("qtdPecasPretas").innerHTML = countPecasPretas;
    document.getElementById("qtdPecasBrancas").innerHTML = countPecasBrancas;
    document.getElementById("qtdDamasPretas").innerHTML = countDamasPretas;
    document.getElementById("qtdDamasBrancas").innerHTML = countDamasBrancas;

    countPecasPretas = 0;
    countPecasBrancas = 0;
    countDamasPretas = 0;
    countDamasBrancas = 0;
    countJogadas++;
}