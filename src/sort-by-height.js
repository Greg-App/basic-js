const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  const ar = [...arr].filter((el)=>el!==-1);
  ar.sort((a,b)=>a-b);
  const res = [];
  arr.forEach((el)=>{
   if(el===-1) {
     res.push(-1);
   } else {
     res.push(ar[0]);
     ar.splice(0,1);
   }
  });
  return res;
 }

module.exports = {
  sortByHeight
};
