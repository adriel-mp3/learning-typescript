export const API_URL = "https://api.origamid.dev/json/transacoes.json?";

export async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = fetch(url);
    const data = (await response).json();
    return data
  }
  catch (e) {
    return null
  }
}