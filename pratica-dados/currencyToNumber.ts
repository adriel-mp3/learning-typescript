/**
 * Receive a string ex: '1.000,00' and returns a number
 * @param {string} coin
 * @returns number
 */

export default function coinToNumber(coin: string): number | null {
  const number = Number(coin.replaceAll(".", "").replace(",", "."));
  return isNaN(number) ? null : number;
}
