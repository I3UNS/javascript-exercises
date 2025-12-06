const convertToCelsius = function(temperature) {
  let x = temperature;
  let a = x - 32;
  const celsiusTemp = (a * 5)/9;
  
  return Number(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let y = temperature;
  let a = (y * 9)/5;
  const fahrenheitTemp = a + 32;
  
  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
