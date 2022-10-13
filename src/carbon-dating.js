const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sample) {
  if(!sample) {return false;}
  if(isNaN(Number(sample))||Number(sample)>MODERN_ACTIVITY||Number(sample)>100||Number(sample)<=0||typeof(sample)!=='string'||Number(sample)===null||Number(sample)===undefined||sample===''||sample===' '||sample==='  ') {return false;}
  if(Number(sample)===0) {return false;}
  const res = Math.ceil(HALF_LIFE_PERIOD*Math.log(MODERN_ACTIVITY/sample)/0.693);
 return res;
}


module.exports = {
  dateSample
};
