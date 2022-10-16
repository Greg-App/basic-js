const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(value) {
    if (arguments.length === 0 || value === true) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    this.alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(str, key) {
    if (arguments.length < 2||str===undefined||key===undefined) {
      throw new Error('Incorrect arguments!');
    }
    //prepare text to encrypt
    const strAr = str.toUpperCase().split('').filter((el) => el.match(/[a-z]/i));
    console.log(strAr);
    //prepare keyword
    let keyWord;
    if (key.length >= strAr.length) {
      keyWord = key.toUpperCase().split('').splice(0, strAr.length);
    } else {
      let k = Math.ceil(strAr.length / key.length);
      keyWord = [];
      for (let i = 0; i < k; i++) {
        keyWord = keyWord.concat(...key.toUpperCase().split(''));
      }
      keyWord = keyWord.splice(0, strAr.length);

    }
    console.log(keyWord);
    //text encryption
    let strArEncrypted = [];
    for (let i = 0; i < strAr.length; i++) {
      let localIndex;
      localIndex = (this.alpha.indexOf(strAr[i]) + this.alpha.indexOf(keyWord[i])) % this.alpha.length;
      console.log(this.alpha.indexOf(strAr[i]), this.alpha.indexOf(keyWord[i]), localIndex);
      strArEncrypted.push(this.alpha[localIndex]);

    }
    strArEncrypted.reverse();
    console.log(strArEncrypted);
    //form result encrypted string
    const res = [];
    for (let i = 0; i < str.length; i++) {
      if (str.split('')[i].match(/[a-z]/i)) {
        res.push(strArEncrypted.splice(-1, 1));
      } else {
        res.push(str[i]);
      }
    }
    return (this.flag===true)?res.join(''):res.reverse().join('');

  }
  decrypt(str, key) {
    if (arguments.length < 2||str===undefined||key===undefined) {
      throw new Error('Incorrect arguments!');
    }
   //prepare text to decrypt
   const strAr = str.toUpperCase().split('').filter((el) => el.match(/[a-z]/i));
   console.log(strAr);
   //prepare keyword
   let keyWord;
   if (key.length >= strAr.length) {
     keyWord = key.toUpperCase().split('').splice(0, strAr.length);
   } else {
     let k = Math.ceil(strAr.length / key.length);
     keyWord = [];
     for (let i = 0; i < k; i++) {
       keyWord = keyWord.concat(...key.toUpperCase().split(''));
     }
     keyWord = keyWord.splice(0, strAr.length);

   }
   console.log(keyWord);
   //text encryption
   let strArEncrypted = [];
   for (let i = 0; i < strAr.length; i++) {
     let localIndex;
     localIndex = (this.alpha.indexOf(strAr[i])+26 - this.alpha.indexOf(keyWord[i])) % this.alpha.length;
     console.log(this.alpha.indexOf(strAr[i]), this.alpha.indexOf(keyWord[i]), localIndex);
     strArEncrypted.push(this.alpha[localIndex]);

   }
   strArEncrypted.reverse();
   console.log(strArEncrypted);
   //form result encrypted string
   const res = [];
   for (let i = 0; i < str.length; i++) {
     if (str.split('')[i].match(/[a-z]/i)) {
       res.push(strArEncrypted.splice(-1, 1));
     } else {
       res.push(str[i]);
     }
   }
   return (this.flag===true)?res.join(''):res.reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
