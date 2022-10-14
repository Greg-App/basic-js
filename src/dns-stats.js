const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const obj = {};
  domains.forEach((el)=>{
    let ar=el.split('.').reverse();
    let locStr='';
    for(i=0;i<ar.length;i++) {
      locStr =locStr+'.'+ar[i];
      if(obj.hasOwnProperty(locStr)) {
        obj[locStr]+=1;
      } else {
        obj[locStr]=1;
      }
    }
  });
  return obj;
}

module.exports = {
  getDNSStats
};
