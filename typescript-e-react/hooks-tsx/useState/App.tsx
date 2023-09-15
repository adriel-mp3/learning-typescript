/** Interface da API: https://data.origamid.dev/vendas/
 <!-- Essa API possui dados de hoje até 90 dias atrás -->

1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
4 - Crie 3 estados reativos em App.tsx: data, inicio, final
5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado
 */
import React from "react";
import Input from "./Input";

type FormaDePagamento = "cartao" | "pix" | "boleto";
type StatusPagamento = "pago" | "procesando";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: StatusPagamento;
  pagamento: FormaDePagamento;
};

function App() {
  const API_URL = `https://data.origamid.dev/vendas/?`;
  const [data, setData] = React.useState<null | Venda[]>(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  // existe formas melhores de fazer um fetch mas para simplificar o exercicio fiz desta forma.
  React.useEffect(() => {
    if (inicio && final) {
      (async () => {
        const response = await fetch(
          `${API_URL}inicio=${inicio}&final=${final}`
        );
        const data = (await response.json()) as Venda[];
        return setData(data);
      })();
    }
  }, [inicio, final, API_URL]);

  return (
    <>
      <div>
        <Input label="Início" type="date" setValue={setInicio} value={inicio} />
        <Input label="Final" type="date" setValue={setFinal} value={final} />
      </div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.nome}: {item.pagamento}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
