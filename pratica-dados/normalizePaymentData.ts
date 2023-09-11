import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";
declare global {
  type PaymentOptions = "Boleto" | "Cartão";

  type PaymentStatus =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Aguardando Pagamento"
    | "Estornada";

  interface UserPaymentDataAPI {
    ID: number;
    Nome: string;
    Email: string;
    Status: PaymentStatus;
    Data: string;
    ["Valor (R$)"]: string;
    ["Forma de Pagamento"]: PaymentOptions;
    ["Cliente Novo"]: number;
  }

  interface UserPaymentData {
    id: number;
    name: string;
    email: string;
    status: PaymentStatus;
    formattedDate: Date;
    date: string;
    currency: string;
    value: number | null;
    paymentOptions: PaymentOptions;
    newClient: boolean;
  }
}

export default function normalizePaymentData(paymentData: UserPaymentDataAPI) {
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
