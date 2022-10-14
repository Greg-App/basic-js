const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) { 
  return  Math.max(0,...String(n).split('')
  .map((el,ind,ar)=> {
    const midAr=[...ar];
    midAr.splice(ind,1);
  return midAr.join('');
}));
}

module.exports = {
  deleteDigit
};
