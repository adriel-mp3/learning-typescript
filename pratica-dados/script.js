import { API_URL, fetchData } from "./fetchData.js";
import normalizePaymentData from "./normalizePaymentData.js";
import statistics from "./statistics.js";
async function handleData() {
    const data = await fetchData(API_URL);
    if (!data)
        throw Error("Erro ao acessar a API");
    const userPaymentData = data.map(normalizePaymentData);
    printPaymentData(userPaymentData);
    console.log(userPaymentData);
    printStats(userPaymentData);
}
handleData();
function printPaymentData(paymentStats) {
    const tableBody = document.querySelector(".user-stats");
    if (!tableBody)
        return;
    paymentStats.forEach((userStatus) => {
        tableBody.innerHTML += `
    <tr>
      <td>${userStatus.name}</td>
      <td>${userStatus.email}</td>
      <td>${userStatus.paymentOptions}</td>
      <td>R$ ${userStatus.currency}</td>
      <td>${userStatus.status}</td>
   </tr>
    `;
    });
}
function printList(list, containerId) {
    const containerElement = document.querySelector(containerId);
    if (containerElement) {
        Object.keys(list).forEach((key) => {
            containerElement.innerHTML += `
        <p>${key}: ${list[key]}</p>
      `;
        });
    }
}
function printStats(paymentStats) {
    const stats = statistics(paymentStats);
    const totalElement = document.querySelector(".total p");
    if (totalElement) {
        totalElement.innerText = stats.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const dayElement = document.querySelector('.day span');
    if (dayElement) {
        dayElement.innerText = `${stats.bestSaleDay[0]}`;
    }
    printList(stats.purchases, '.payment');
    printList(stats.statusPayments, '.stats');
}
