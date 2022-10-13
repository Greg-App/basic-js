const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (![...arguments].length || [...arguments].length === 0) {
      return 'Unable to determine the time of year!';
  }
 
  /* if(date.getMonth!=='function') {
    throw new Error('Invalid date!');
  } */
  if (!date||!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (Date.parse(date)===NaN||typeof date === 'number') {
    throw new Error('Invalid date!');
    
  }
  try {
    let dd = date.getUTCDay();
    let bb = date.getMonth();

  } 
  catch (e) {
    throw new Error('Invalid date!');
  }
    /*date.prototype.getUTCDay()==='[object Object]' */
  
    
  
/* try{let d =Date.parse(date);} 
    catch (err) {
        throw new Error('Invalid date!');
    } */
    

  const seasons = {
      'winter': [0, 1, 11],
      'spring': [2, 3, 4],
      'summer': [5, 6, 7],
      'autumn': [8, 9, 10],
  };
  seasonNames = Object.keys(seasons);
  let curSeason = '';
  seasonNames.forEach(el => {
      if (seasons[el].includes(date.getMonth())) {
          curSeason += el;
      }
  });
  return curSeason;
}

module.exports = {
  getSeason
};
