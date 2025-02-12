document.addEventListener("DOMContentLoaded", function () {
    const limparCarrinhoBtn = document.getElementById("limpar-carrinho");

    if (limparCarrinhoBtn) {
        limparCarrinhoBtn.addEventListener("click", function () {
            localStorage.removeItem("carrinho"); // remove os itens do armazenamento local
            atualizarCarrinho(); // atualiza a interface do carrinho
        });
    }
});

// atualização do carrinho 
function atualizarCarrinho() {
    const carrinhoContainer = document.getElementById("conteudo-carrinho");
    if (carrinhoContainer) {
        carrinhoContainer.innerHTML = "<p>Carrinho vazio</p>";
    }
}
