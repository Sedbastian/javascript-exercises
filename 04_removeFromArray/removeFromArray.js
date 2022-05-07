const singleRemoveFromArray = function(array, thingToRemove) {
    let index = array.indexOf(thingToRemove);
    if (index === -1) {
        return array;
    }
    array.splice(index, 1);
    return array;
};

const removeFromArray = function() {
    let completeArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        completeArray = singleRemoveFromArray(completeArray, arguments[i]);
    }
    return completeArray;
}

// let arreglo = ["lkj", "lgkrt", "3", "4"];
// arregloNuevo = removeFromArray(arreglo, "4", "3");
// console.log(arregloNuevo);


// Do not edit below this line
module.exports = removeFromArray;
