const fibonacci = function(n) {
    if (n <= 0) {return "OOPS"
    } else if (n == 1 || n == 2) {
        return 1;
    } else {
        let ultimoValor = 1;
        let anteUlValor = 1;
        let nuevoValor;
        for(let i = 2; i < n; i++) {
            nuevoValor = ultimoValor + anteUlValor;
            anteUlValor = ultimoValor;
            ultimoValor = nuevoValor;
            
        };
        return nuevoValor;
    };
};

// Do not edit below this line
module.exports = fibonacci;
