const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`\'arr\' parameter must be an instance of the Array!`);
  }
  const transArr = [];
  const seq =['--discard-next','--discard-prev','--double-next','--double-prev'];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (arr[i] === '--discard-next') {
        i += 1;
      } else if (arr[i] === '--discard-prev') {
        if(transArr.length!==0) {
          if(arr[i-2]!=='--discard-next') {
          transArr.pop();
          } 
        }
      } else if (arr[i] === '--double-next') {
        if(arr[i+1]) {
          transArr.push(arr[i+1]); 
        }
      } else if (arr[i] === '--double-prev') {
        if(arr[i-1]) {
          if(arr[i-2]&&arr[i-2]!=='--discard-next') {
        transArr.push(transArr[transArr.length-1]);
        }
      }
      
      }
      else {
        transArr.push(arr[i]);
      }      

    }
  }
  return transArr;
}

module.exports = {
  transform
};
