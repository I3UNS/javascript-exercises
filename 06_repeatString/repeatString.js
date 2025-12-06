const repeatString = function(str, strIteratorValue) {
    let finalStr = "";

    if(strIteratorValue < 0){
        return "ERROR";
    } 
    else {
        for (let i = 0; i < strIteratorValue; i++){
        finalStr += str;
    }
    }

    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
