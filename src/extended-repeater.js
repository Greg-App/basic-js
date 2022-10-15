const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const opt = options;
  if(opt.hasOwnProperty('separator')) {
    opt.separator=String(opt.separator);
  } else {
    opt.separator='+';
  }
  if(opt.hasOwnProperty('additionSeparator')) {
    opt.additionSeparator=String(opt.additionSeparator);
  } else {
    opt.additionSeparator='|';
  }
  if(opt.hasOwnProperty('repeatTimes')) {
    opt.repeatTimes=parseInt(opt.repeatTimes);
  } else {
    opt.repeatTimes=1;
  }
  if(opt.hasOwnProperty('addition')) {
    opt.addition=String(opt.addition);
  } else {
    opt.addition='';
  }
  if(opt.hasOwnProperty('additionRepeatTimes')) {
    opt.additionRepeatTimes=parseInt(opt.additionRepeatTimes);
  } else {
    opt.additionRepeatTimes=1;
  }
  let strAdd = '';
  for (let j = 0; j < opt.additionRepeatTimes; j++) {
    if (j !== opt.additionRepeatTimes - 1) {
      strAdd += opt.addition + opt.additionSeparator;
    } else {
      strAdd += opt.addition;
    }
  }
  let strResult = '';
  for (let i = 0; i < opt.repeatTimes; i++) {
    if (i !== opt.repeatTimes - 1) {
      strResult += str + strAdd+opt.separator;
    } else {
      strResult += str+strAdd;
    }
  }
  return strResult;
}

module.exports = {
  repeater
};
