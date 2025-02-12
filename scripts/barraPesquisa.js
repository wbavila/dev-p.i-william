document.getElementById("btn-pesquisar").addEventListener("click", () => {
    const termo = document.getElementById("pesquisa").value.trim();
    if (termo) {
        alert(`Você pesquisou por: ${termo}`);
        //exibe os resultados
    } else {
        alert("Digite algo para pesquisar!");
    }
});
