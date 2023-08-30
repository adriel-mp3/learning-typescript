"use strict";
function roundValue(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else
        return Math.ceil(Number(value)).toString();
}
console.log(roundValue(10.2));
console.log(roundValue("10.2"));
