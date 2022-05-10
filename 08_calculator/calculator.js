const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
    let arrayAux = array;
    let sumAux = 0;
    for (let i = (arrayAux.length - 1); i >= 0; i--) {
        sumAux += arrayAux[i];
    }
    return sumAux;
    
};

const multiply = function(array) {
    let arrayAux = array;
    let multAux = 1;
	for (let i = (arrayAux.length - 1); i >= 0; i--) {
        multAux *= arrayAux[i];
    }
    return multAux;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
        return 1;
    }
    let factorialAux = 1;
    for (let i = a; i >= 1; i--) {
        factorialAux *= i;
    }
    return factorialAux;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
