const reverseString = function(string) {
    let originalString = string;
    const arrayedString = originalString.split("");
    const reversedArray = arrayedString.reverse();
    return reversedArray.join("");
}

// let example = reverseString("Selassie");
// console.log(example);

// Do not edit below this line
module.exports = reverseString;
