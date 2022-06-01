const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Selassie",
        yearOfBirth: 1912,
    },
  ]

const findTheOldest = function(gente) {
    function reductora(previous, current) {
        let previousLastAlive = previous.yearOfDeath;
        let currentLastAlive = current.yearOfDeath;
        if (previous.yearOfDeath === undefined) {previousLastAlive = (new Date()).getFullYear()};
        if (current.yearOfDeath === undefined) {currentLastAlive = (new Date()).getFullYear()};
        if (previousLastAlive - previous.yearOfBirth > currentLastAlive - current.yearOfBirth) {
            return previous;
        }
        return current;
    };
    return gente.reduce(reductora);
};

// Do not edit below this line
module.exports = findTheOldest;
