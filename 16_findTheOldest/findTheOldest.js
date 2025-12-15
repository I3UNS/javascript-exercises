const calculateAge = function(deathYear, birthYear){
    if(!deathYear){
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
};

const findTheOldest = function(people) {
    // let arrObj = people
    //                     .map(el => el.yearOfDeath - el.yearOfBirth)
    //                     .sort((a, b) => b - a);
    
    return people.reduce((oldest, currPerson) => {
        const oldestAge = calculateAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currPersonAge = calculateAge(currPerson.yearOfDeath, currPerson.yearOfBirth);
        return currPersonAge > oldestAge ? currPerson : oldest;
    })
    
};

// Do not edit below this line
module.exports = findTheOldest;
