document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o envio do formulário

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // simulação de usuário cadastrado
        const usuarioCorreto = "williambarros211@gmail.com";
        const senhaCorreta = "spititout18";

        if (email === usuarioCorreto && password === senhaCorreta) {
            alert("Login bem-sucedido! Clique em OK para conferir nossos produtos. Boas compras!");
            window.location.href = "../pages/jogos.html"; 
        } else {
            alert("E-mail ou senha incorretos. Tente novamente.");
        }
    });
});
