const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  'chain':[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(!this.hasOwnProperty('chain')) {
      this.chain=[];
    }
    if(arguments.length===0) {
      this.chain.push('(  )');  
    } else {
    this.chain.push((value!==undefined)?`( ${value} )`:`(  )`);
  }
  return this;
  }, 
  removeLink(position) {
    if(!this.chain[position-1]||typeof(position)!=='number'||position===Infinity||position<=0||position>this.chain.length) {
      delete this.chain;
      throw new Error('You can\'t remove incorrect link!');
    } else {
    this.chain.splice(position-1,1);
    return this;}
  },
  reverseChain() {
    if(this.hasOwnProperty('chain')&&Array.isArray(this.chain)&&this.chain.length) {
      this.chain.reverse();     
        }
    return this;
  },
  finishChain() {
    const resChain =`${this.chain.join('~~')}`;
    delete this.chain;
    return resChain;
  }
};

module.exports = {
  chainMaker
};
