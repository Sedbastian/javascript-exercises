const palindromes = function (string) {
    
    let text = string.toLowerCase();
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\ ]/g;
    let textWithoutPunctuation = text.replace(regex, '');
    
    let array = textWithoutPunctuation.split("");
    console.log(array);
    
    for (let i = 0; i <= (array.length / 2 - 1); i++) {
        
        console.log(array[i]);
        console.log(array[array.length-i-1]);
        
        if (array[i] === array[array.length-i-1]) {
            continue;
        }
        return false;
    }
    return true;
};

// From SOLUTIONS!!!
// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

// console.log(palindromes("a Bclcb,a"));
// Do not edit below this line
module.exports = palindromes;
