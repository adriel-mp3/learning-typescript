"use strict";
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    return data;
}
async function getTotalVendas() {
    const vendas = await fetchVendas();
    const total = vendas.reduce((acc, [_, precoProduto]) => {
        return acc + precoProduto;
    }, 0);
    printTotal(total);
}
function printTotal(total) {
    return (document.body.innerHTML = `<h1>${total}</h1>`);
}
getTotalVendas();
