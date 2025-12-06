const sumAll = function(firstValue, lastValue) {
    if(!Number.isInteger(firstValue) || !Number.isInteger(lastValue)){
        return "ERROR";
    }
    if(firstValue < 0 || lastValue < 0){
        return "ERROR";
    }
    if(firstValue > lastValue){
        // Checks whether the firstValue is larger than the lastValue. If so, then interchanges the values with eachother
        
        let temp = firstValue;
        firstValue = lastValue;
        lastValue = temp;
    }

    let sum = 0;
    for (let i = firstValue; i <= lastValue; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
