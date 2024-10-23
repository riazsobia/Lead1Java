'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(...numbers) {
  return validArguments(numbers)
    ? numbers.reduce( (result,n) => result+n, 0 )
    : null;
};

arithmetic.subtract = function (...numbers) {
  return validArguments(numbers)
    ? numbers.reduce( (result,n) => result && result-n )
    : null;
};

arithmetic.multiply = function (...numbers) {
  return validArguments(numbers)
    ? numbers.reduce( (result,n) => result*n, 1 )
    : null;
};

arithmetic.divide = function (...numbers) {
  return validArguments(numbers, 0)
    ? numbers.reduce( (result,n) => result/n )
    : null;
};


// Private Methods (helper functions)
function validArguments(args, disallow) {
  return (args.length >= 2 && ! args.includes(disallow) && allValuesNumeric(args)) || false;
}

function allValuesNumeric(args) {
  return args.every(isNumeric);
}

function isNumeric(element) {
  return typeof element === 'number';
}
