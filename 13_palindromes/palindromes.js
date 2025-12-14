const palindromes = function (str) {
    const originalString = str.replace(/[^A-Za-z0-9]/g, "").split("").join("").toLowerCase();
    const reversedString = str.replace(/[^A-Za-z0-9]/g, "").split("").reverse().join("").toLowerCase();
    return reversedString === originalString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
