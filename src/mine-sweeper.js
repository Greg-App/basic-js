const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const res =JSON.parse(JSON.stringify(matrix));
  console.log(matrix);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const nbhrs=[];
      nbhrs.push(((i-1) in matrix)?matrix[i-1][j]:0);
      nbhrs.push(((i+1) in matrix)?matrix[i+1][j]:0);
      nbhrs.push(((j-1) in matrix[i])?matrix[i][j-1]:0);
      nbhrs.push(((j+1) in matrix[i])?matrix[i][j+1]:0);
      nbhrs.push((((j+1) in matrix[i])&&((i+1) in matrix))?matrix[i+1][j+1]:0);
      nbhrs.push((((j-1) in matrix[i])&&((i-1) in matrix))?matrix[i-1][j-1]:0);
      nbhrs.push((((j+1) in matrix[i])&&((i-1) in matrix))?matrix[i-1][j+1]:0);
      nbhrs.push((((j-1) in matrix[i])&&((i+1) in matrix))?matrix[i+1][j-1]:0);
      console.log(nbhrs);
      res[i][j]=nbhrs.filter((el)=>el===true).length;
    }
  }
  return res;

}

module.exports = {
  minesweeper
};
