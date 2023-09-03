"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
const form = document.querySelector("#form");
const inputs = document.querySelectorAll("#form input");
function isUser(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    return "nome" in value || "email" in value || "cpf" in value;
}
function handleInput(event) {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
        window.UserData = {
            ...window.UserData,
            [input.id]: input.value,
        };
        localStorage.setItem("user", JSON.stringify(window.UserData));
    }
}
function loadLocalStorage() {
    const userJson = localStorage.getItem("user");
    if (userJson) {
        const data = JSON.parse(userJson);
        window.UserData = data;
        updateFormInputs(data);
    }
}
loadLocalStorage();
function updateFormInputs(data) {
    if (isUser(data)) {
        inputs.forEach((input) => {
            if (input instanceof HTMLInputElement) {
                const id = input.id;
                input.value = data[id];
            }
        });
    }
}
form?.addEventListener("keyup", handleInput);
