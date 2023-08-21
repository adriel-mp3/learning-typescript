const input = document.querySelector("input");
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
  input.addEventListener("keyup", totalMudou);
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p)
    p.innerText = `ganho total: ${Number(value) + 100 - Number(value) * 0.2}`;
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem("total", input.value);
    calcularGanho(value);
  }
}
