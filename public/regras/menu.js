function escolhaBranco() {
    escolhaJogador = 'white';
    $("#btnBranco").remove();
    $("#btnPreto").remove();
    socket.emit('escolhaJogador', {to: roomName, from: socket.id, msg: escolhaJogador});
}

function escolhaPreto() {
    escolhaJogador = 'black';
    $("#btnBranco").remove();
    $("#btnPreto").remove();
    document.querySelector('canvas').className = "canvas rotate";
    socket.emit('escolhaJogador', {to: roomName, from: socket.id, msg: escolhaJogador});
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
    var r = $('<input type="text" id="socketRoom"></input>');
    $(".menu").append(r);
    r = $('<button id="btnRoom" onclick="joinRoom()">Botao</button>');
    $(".menu").append(r);
}

function joinRoom() {
    roomName = document.getElementById('socketRoom').value;
    socket.emit('addToRoom', roomName);
    $(".info").append('Connected to room: ' + roomName + "<br>");
    $("#btnRoom").remove();
    $("#socketRoom").remove();
    var r = $('<button id="btnPreto" onclick="escolhaPreto()">Preto</button>');
    $(".menu").append(r);
    r = $('<button id="btnBranco" onclick="escolhaBranco()">Branco</button>');
    $(".menu").append(r);
}