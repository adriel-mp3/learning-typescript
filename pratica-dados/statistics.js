import countBy from "./countBy.js";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
function isPaymentValue(data) {
    return data.value !== null;
}
export default function statistics(data) {
    const statisticsData = data;
    function setTotal() {
        const filtredPaymentValues = statisticsData.filter(isPaymentValue);
        return filtredPaymentValues.reduce((a, b) => {
            return a + b.value;
        }, 0);
    }
    function setTypePurchases() {
        const purchases = statisticsData.map(({ paymentOptions }) => paymentOptions);
        return countBy(purchases);
    }
    function setStatusPayments() {
        const typePayments = statisticsData.map(({ status }) => status);
        return countBy(typePayments);
    }
    function setWeekendSales() {
        const weekendSales = statisticsData.map((data) => DaysOfWeek[data.formattedDate.getDay()]);
        return countBy(weekendSales);
    }
    function setBestSaleDay() {
        const weekendSales = setWeekendSales();
        const sortedSales = Object.entries(weekendSales).sort((a, b) => {
            return b[1] - a[1];
        });
        return sortedSales[0];
    }
    return {
        total: setTotal(),
        purchases: setTypePurchases(),
        statusPayments: setStatusPayments(),
        weekendSales: setWeekendSales(),
        bestSaleDay: setBestSaleDay(),
    };
}
