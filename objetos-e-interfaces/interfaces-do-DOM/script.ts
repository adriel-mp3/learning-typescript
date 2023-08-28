/**
1 - Selecione os elementos com a classe link.
2 - Crie uma função que deve ser executada para cada elemento.
3 - Modificar através da função o estilo da color e border.
 */

const elements = document.querySelectorAll(".link");

elements.forEach((element) => {
  // console.dir(element.__proto__) só funciona em browser verifica o protótipo **não usar**
  if (element instanceof HTMLElement) {
    handleElements(element);
  }
});

function handleElements(element: HTMLElement) {
  element.style.borderBottom = "2px solid red";
  element.style.color = "red";
}
