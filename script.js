function maior_redirecionar() {
    window.location.replace("conta.html"); // função para abrir guia do +18
}

function menor_redirecionar() {
    window.location.replace("-18.html"); // função para abrir guia do -18
}

function usuario() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "1234" && senha == "1234") {
        window.location.replace("homepage.html");
    } else {
        alert('Usuário e Senha não registrados. Tente novamente.');
    }
}

function formulario(){
    alert("Mensagem enviada com sucesso!")   
}

var quantidadeVinho1 = 0
var quantidadeVinho2 = 0
var quantidadeVinho3 = 0

var valorVinho1 = 100
var valorVinho2 = 150
var valorVinho3 = 200

var valorTotalVinho1 = 0
var valorTotalVinho2 = 0
var valorTotalVinho3 = 0

var valorTotal = 0

resultado = document.getElementById("resultado");
cupomAplicado = document.getElementById("cupomAplicado");

var cupom = document.getElementById("cupom").value;

function CalcularVinho(preco) {
    switch (preco) {
        case valorVinho1:
            quantidadeVinho1++;
            valorTotalVinho1 = quantidadeVinho1 * valorVinho1
            alert('Vinho adicionado ao carrinho.');
            break;
        case valorVinho2:
            quantidadeVinho2++;
            valorTotalVinho2 = quantidadeVinho2 * valorVinho2
            alert('Vinho adicionado ao carrinho.');
            break;
        case valorVinho3:
            quantidadeVinho3++;
            valorTotalVinho3 = quantidadeVinho3 * valorVinho3
            alert('Vinho adicionado ao carrinho.');
            break;
        default:
            var cupom = document.getElementById("cupom").value;
            cupomAplicado.innerText = ""
            break
    }
    valorTotal = valorTotalVinho1 + valorTotalVinho2 + valorTotalVinho3
    if(cupom == "FIAP2024"){
        valorTotal -= valorTotal * 0.1
        cupomAplicado.innerText = "Cupom Aplicado"
    }

    resultado.innerText = `${quantidadeVinho1} Chardonnay = R$${valorTotalVinho1},00\n${quantidadeVinho2} Lafit Crystal = R$${valorTotalVinho2},00\n${quantidadeVinho3} Chatteau China = R$${valorTotalVinho3},00\n-----------------------------\nValor total = R$${valorTotal},00`
}

