function jogar(escolhaUsuario) {
    const escolhas = ["pedra", "papel", "tesoura"];
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

    let resultado = "";

  
    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Você ganhou! " + escolhaUsuario + " vence " + escolhaComputador;
    } else {
        resultado = "Você perdeu! " + escolhaComputador + " vence " + escolhaUsuario;
    }


    document.getElementById("resultado").textContent = resultado;
}