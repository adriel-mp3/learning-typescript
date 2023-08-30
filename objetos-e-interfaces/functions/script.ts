// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
// function roundValue<T = number | string>(value: T) {
//   if (typeof value === 'number') {
//     return Math.ceil(value);
//   }
//   if (typeof value === 'string' && Number(value)) {
//     return String(Math.ceil(Number(value)));
//   }
// }
function roundValue(value: number): number;
function roundValue(value: string): string;
function roundValue(value: string | number): string | number {
  if (typeof value === "number") {
    return Math.ceil(value);
  } else return Math.ceil(Number(value)).toString();
}
console.log(roundValue(10.2));
console.log(roundValue("10.2"));
