function maior_redirecionar() {
    window.open("+18.html"); // função para abrir guia do +18
}

function menor_redirecionar() {
    window.open("-18.html"); // função para abrir guia do -18
}

function usuario() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "1234" && senha == "1234") {
        window.open("vinhos_opcoes.html");
    } else {
        alert('Usuário e Senha não registrados. Tente novamente.');
    }
}
