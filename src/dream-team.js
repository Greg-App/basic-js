const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!Array.isArray(members)) {return false;}
  let res ='';
  res +=members.reduce((sum,el)=> {
   let mideElem='';

   if(typeof(el)==='string') {
       return sum+el.split('').filter((elem)=>!elem.match(/[\s\n\r\f\v\t]/)).join()[0].toLocaleUpperCase();
   } else{
   return sum;
   }
  },'');

  return res.split('').sort().join('');

 }

module.exports = {
  createDreamTeam
};
