import countBy from "./countBy.js";

type PaymentValue = UserPaymentData & { value: number };

enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isPaymentValue(data: UserPaymentData): data is PaymentValue {
  return data.value !== null;
}

export default function statistics(data: UserPaymentData[]) {
  const statisticsData = data;

  function setTotal() {
    const filtredPaymentValues = statisticsData.filter(isPaymentValue);
    return filtredPaymentValues.reduce((a, b) => {
      return a + b.value;
    }, 0);
  }

  function setTypePurchases() {
    const purchases = statisticsData.map(
      ({ paymentOptions }) => paymentOptions
    );
    return countBy(purchases);
  }

  function setStatusPayments() {
    const typePayments = statisticsData.map(({ status }) => status);
    return countBy(typePayments);
  }

  function setWeekendSales() {
    const weekendSales = statisticsData.map(
      (data) => DaysOfWeek[data.formattedDate.getDay()]
    );
    return countBy(weekendSales);
  }

  function setBestSaleDay() {
    const weekendSales = setWeekendSales();
    const sortedSales = Object.entries(weekendSales).sort((a, b) => {
      return b[1] - a[1];
    });
    return sortedSales[0]
  }

  return {
    total: setTotal(),
    purchases: setTypePurchases(),
    statusPayments: setStatusPayments(),
    weekendSales: setWeekendSales(),
    bestSaleDay: setBestSaleDay(),
  };
}
