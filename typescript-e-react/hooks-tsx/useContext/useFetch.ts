/** 
Crie um custom hook chamado useFetch.

1 - Este hook deve retornar a interface:
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.

2 - data, loading e error são estados reativos (useState).

3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).

4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.

5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.

6 - Teste o Hook com a api: https://data.origamid.dev/produtos
*/

import React from "react";

const useFetch = <T>(url: URL | RequestInfo, options?: RequestInit) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controler = new AbortController();
    const { signal } = controler;
    (async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        const data = (await response.json()) as T;
        if (!signal.aborted) setData(data);
      } catch (error) {
        if (error instanceof Error && signal.aborted) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
