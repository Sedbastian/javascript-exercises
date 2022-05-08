const repeatString = function(string, num) {
    let repetitions = num;
    if (repetitions === 0) {
        return "";
    }
    if (repetitions < 0) {
        return "ERROR";
    }
    let repeatedString = string;
    for (let i = num; i !== 1 ; i--) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;
};

// let probar;
// probar = repeatString("selassie", 0);
// console.log(probar);

// Do not edit below this line
module.exports = repeatString;
