// Basicamente uma interface que compõe uma empresa, assim podemos simplificar a interface Product e evitar repetições desnecessárias.
interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  // Podemos utilizar interfaces dentro de interfaces para simplificar nestes casos, em vez de tipar repetidamente.
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

(async () => {
  const response = await fetch("https://api.origamid.dev/json/notebook.json"); // fetch produto
  const data = await response.json(); // dados do produto
  showProduct(data); // Imprime na tela o produto
})();

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
