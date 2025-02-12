document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formulario");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const endereco = document.getElementById("endereco").value.trim();

        if (!validarNome(nome)) {
            alert("Nome inválido! Digite pelo menos 3 caracteres.");
            return;
        }
        
        if (!validarCPF(cpf)) {
            alert("CPF inválido! Digite um CPF válido no formato 000.000.000-00.");
            return;
        }
        
        if (!validarEmail(email)) {
            alert("E-mail inválido! Digite um e-mail válido.");
            return;
        }
        
        if (!validarTelefone(telefone)) {
            alert("Telefone inválido! Digite um telefone válido no formato 51995130469.");
            return;
        }
        
        if (endereco.length < 5) {
            alert("Endereço inválido! Digite pelo menos 5 caracteres.");
            return;
        }
        
        alert("Cadastro realizado com sucesso!");
        form.reset();
    });

    function validarNome(nome) {
        return nome.length >= 3;
    }

    function validarCPF(cpf) {
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regexCPF.test(cpf);
    }

    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    function validarTelefone(telefone) {
        // validação do formato 51995130469
        const regexTelefone = /^[0-9]{11}$/;
        return regexTelefone.test(telefone);
    }
});
