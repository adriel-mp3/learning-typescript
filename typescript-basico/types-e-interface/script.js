"use strict";
(async () => {
    const response = await fetch("https://api.origamid.dev/json/notebook.json"); // fetch produto
    const data = await response.json(); // dados do produto
    showProduct(data); // Imprime na tela o produto
})();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
