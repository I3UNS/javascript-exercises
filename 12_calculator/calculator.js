const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numberArray) {
	return numberArray.reduce((a, b) => a + b, 0);
};

const multiply = function(numberArray) {
	return numberArray.reduce((a, b) => a * b);
};

const power = function(numberBase, numberExponent) {
	return Math.pow(numberBase, numberExponent);
};

const factorial = function(num) {
  let sum = 0;

  if(num === 0){
    sum = 1;
    return sum;
  }

  sum = num
  let length = num - 1;
  for (let i = length; i > 0; i--){
    sum *= num - i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
