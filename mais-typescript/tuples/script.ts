// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
interface DetalhesProduto {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, DetalhesProduto];
type Vendas = Venda[];

async function fetchVendas(): Promise<Vendas> {
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

function printTotal(total: number) {
  return (document.body.innerHTML = `<h1>${total}</h1>`);
}

getTotalVendas();
