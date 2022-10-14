const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const res=[];
 names.forEach((el,ind,ar) => {
  let k=ind>0?ar.slice(0,ind).filter((elem)=>elem===el).length:0;
  let n=ind>0?res.slice(0,ind).filter((elem)=>elem===el).length:0;
  console.log(k,n);
  if(k>0||n>0) {
    res.push(`${el}(${Math.max(k,n)})`);
  } else {
    res.push(el);
  }
 });
 return res;
}

module.exports = {
  renameFiles
};
