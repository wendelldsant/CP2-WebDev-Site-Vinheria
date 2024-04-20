function usuario() {
    var login = parseFloat(document.getElementById("login").value);
    var senha = parseFloat(document.getElementById("senha").value);
    if (login === 1234 && senha === 1234){
        alert("Ola")
        window.open("http://127.0.0.1:5500/+18.html") --> função para abrir nova guia
    }
}
