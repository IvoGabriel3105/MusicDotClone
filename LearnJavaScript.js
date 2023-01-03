function mostraAlerta() {
    alert("Funciona!");
    }
    // obtendo um elemento através de um seletor de ID
    var botao = document.querySelector("#botaoEnviar");
    botao.onclick = mostraAlerta;