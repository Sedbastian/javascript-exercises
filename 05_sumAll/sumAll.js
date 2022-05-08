const sumAll = function(numOne, numTwo) {
    let fromNumber = numOne;
    let toNumber = numTwo;

    if (typeof(numOne) != "number" || typeof(numTwo) != "number" || numOne < 0 || numTwo < 0) {
        return "ERROR";
    }
    let sum = 0;
    if (numOne > numTwo) {
        fromNumber = numTwo;
        toNumber = numOne;
    }
    for (i = fromNumber; i <= toNumber; i++) {
        sum += i;
    }
    return sum;
};

// console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
