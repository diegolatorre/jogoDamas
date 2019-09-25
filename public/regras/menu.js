function escolhaBranco() {
    escolhaJogador = 'white';
    $("#btnBranco").remove();
    $("#btnPreto").remove();
    socket.emit('escolhaJogador', escolhaJogador);
}

function escolhaPreto() {
    escolhaJogador = 'black';
    $("#btnBranco").remove();
    $("#btnPreto").remove();
    socket.emit('escolhaJogador', escolhaJogador);
}

function escolhaUmJogador() {
    $("#btnUmJogador").remove();
    $("#btnDoisJogadores").remove();
    $("#btnMultiplayer").remove();
    escolhaJogador = 'white';
    umJogador = true;
}

function escolhaDoisJogadores() {
    $("#btnUmJogador").remove();
    $("#btnDoisJogadores").remove();
    $("#btnMultiplayer").remove();
    doisJogadores = true;
}

function escolhaMultiplayer() {
    $("#btnUmJogador").remove();
    $("#btnDoisJogadores").remove();
    $("#btnMultiplayer").remove();
    multiplayer = true;
    var r = $('<button id="btnPreto" onclick="escolhaPreto()">Preto</button>');
    $(".menu").append(r);
    r = $('<button id="btnBranco" onclick="escolhaBranco()">Branco</button>');
    $(".menu").append(r);
}