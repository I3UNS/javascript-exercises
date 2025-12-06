const removeFromArray = function(arr, ...elements) {

    // 1st Method: 
    // Create a new array and put all values except the requested elements to be removed. Return the new array.
/*
    const newArr = [];

    arr.forEach(element => {
       if(!elements.includes(element)){
        newArr.push(element);
       } 
    });
    return newArr; 
*/

    // 2nd Method:
    // Using .filter method.

    return arr.filter(item => !elements.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
