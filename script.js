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
