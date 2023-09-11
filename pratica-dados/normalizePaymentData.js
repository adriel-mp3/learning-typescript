import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";

export default function normalizePaymentData(paymentData) {
    return {
        id: paymentData.ID,
        name: paymentData.Nome,
        email: paymentData.Email,
        status: paymentData.Status,
        date: paymentData.Data,
        formattedDate: stringToDate(paymentData.Data),
        currency: paymentData["Valor (R$)"],
        value: currencyToNumber(paymentData["Valor (R$)"]),
        paymentOptions: paymentData["Forma de Pagamento"],
        newClient: Boolean(paymentData["Cliente Novo"]),
    };
}
