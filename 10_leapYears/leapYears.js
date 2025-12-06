const leapYears = function(year) {
    const isDivisbleByFour = year % 4 === 0;
    const isDivisbleByHundred = year % 100 === 0;
    const isDivisbleByFourHundred = year % 400 === 0;

    if(isDivisbleByFour && (isDivisbleByFourHundred || !isDivisbleByHundred)){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
