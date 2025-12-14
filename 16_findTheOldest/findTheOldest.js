const findTheOldest = function(people) {
    let arrObj = people.map(el => ({name: el.name ,age: (el.yearOfDeath - el.yearOfBirth)}));
    const oldestAge = arrObj.sort((a, b) => b.age - a.age);
    
};

// Do not edit below this line
module.exports = findTheOldest;
