const fibonacci = function(num) {
    let counter
    if(typeof num !== "number"){
        counter = parseInt(num);
    } else{
        counter = num;
    }

    if(counter < 0){
        return "OOPS";
    } 

    if(counter === 0){
        return 0;
    } else if (counter === 1){
        return 1;
    } else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
