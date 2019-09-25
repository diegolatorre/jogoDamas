function Peca(x, y, c, l, cor, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.selected = false;
    this.casa = { c: c, l: l };
    this.cor = cor;
    this.superDama = false;
}

function newPeca(c, l, cor) {
    var p = 0;
    /*
    if (screen.width <= 400) {
        p = 13;
        r = 10;
    } else {
        p = 32;
        r = 20;
    }*/
    p = tabuleiro[0][0].w / 2;
    r = (tabuleiro[0][0].w / 2) / 2;
    var peca = new Peca(tabuleiro[c][l].x + p, tabuleiro[c][l].y + p, c, l, cor, r);
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
    ctx.fillText(`${i}`, pecas[i].x - 5, pecas[i].y);
    ctx.closePath();
}

function moverPeca() {

    //preenchendo log das jogadas
    log();

    //limpando a selecao de peca e casa
    pecas[jogada.peca].selected = false;
    tabuleiro[jogada.casa.c][jogada.casa.l].selected = false;

    //colocando a ultimaPeca jogada
    ultimaPeca = jogada.peca;

    //movendo a peca no tabuleiro
    /*
    if (screen.width <= 400) {
        pecas[jogada.peca].x = tabuleiro[jogada.casa.c][jogada.casa.l].x + 13;
        pecas[jogada.peca].y = tabuleiro[jogada.casa.c][jogada.casa.l].y + 13;
    } else {
        pecas[jogada.peca].x = tabuleiro[jogada.casa.c][jogada.casa.l].x + tabuleiro[jogada.casa.c][jogada.casa.l].w / 2;
        pecas[jogada.peca].y = tabuleiro[jogada.casa.c][jogada.casa.l].y + tabuleiro[jogada.casa.c][jogada.casa.l].h / 2;
    }*/

    pecas[jogada.peca].x = tabuleiro[jogada.casa.c][jogada.casa.l].x + tabuleiro[jogada.casa.c][jogada.casa.l].w / 2;
    pecas[jogada.peca].y = tabuleiro[jogada.casa.c][jogada.casa.l].y + tabuleiro[jogada.casa.c][jogada.casa.l].h / 2;

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

    if (jogadasObrigatorias.length > 0) {
        jogadasPossiveis = [];
        jogadasObrigatorias = [];
        percorrerPecas();
    }

    //altera quem é a vez de jogar
    if (jogadasObrigatorias.length == 0) {
        alterarVez();
    }

    if (multiplayer) {
        socket.emit('tabuleiro', JSON.stringify(tabuleiro));
        socket.emit('pecas', JSON.stringify(pecas));
        socket.emit('jogada', JSON.stringify(jogada));
    }

}

function log() {
    logJogadas += `\n\nJOGADA N°${countJogadas} \nJogador: ${jogada.jogador}\nPeça n°: ${jogada.peca}\nCasa Origem: coluna: ${jogada.casaOrigem.c} linha: ${jogada.casaOrigem.l}\nCasa destino: coluna: ${jogada.casa.c} linha: ${jogada.casa.l}`;

    /*
    // Buscar elemento pai
    var elemento_pai = document.getElementById("jogadas");

    // Criar elemento
    var titulo = document.createElement('p');

    // Criando o nó de texto de outra forma
    titulo.innerHTML = `<br />JOGADA N°${countJogadas} <br />Jogador: ${jogada.jogador}<br />Peça n°: ${jogada.peca}<br />Casa Origem: coluna: ${jogada.casaOrigem.c} linha: ${jogada.casaOrigem.l}<br />Casa destino: coluna: ${jogada.casa.c} linha: ${jogada.casa.l}`;

    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(titulo);
    */
    //$(".divLog").append(`<br><br>JOGADA N°${countJogadas} <br>Jogador: ${jogada.jogador}<br>Peça n°: ${jogada.peca}<br>Casa Origem: coluna: ${jogada.casaOrigem.c} linha: ${jogada.casaOrigem.l}<br>Casa destino: coluna: ${jogada.casa.c} linha: ${jogada.casa.l}`);

    countJogadas++;
}

function alterarVez() {
    if (jogada.jogador == 'white') {
        jogada.jogador = 'black';
        document.getElementById("jogador").innerHTML = 'Pretas';
        jogadasPossiveis = [];
        jogadasObrigatorias = [];
        ultimaPeca = null;
        percorrerPecas();
    } else {
        jogada.jogador = 'white';
        document.getElementById("jogador").innerHTML = 'Brancas';
        jogadasPossiveis = [];
        jogadasObrigatorias = [];
        ultimaPeca = null;
        percorrerPecas();
    }
}