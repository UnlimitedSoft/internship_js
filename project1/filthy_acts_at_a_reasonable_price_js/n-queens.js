<<<<<<< HEAD
// Descendant Diagonal
const descDiag = [];
// Ascendant Diagonal
const ascDiag = [];

function nQueens(n, firstQueen) {
  // Create the board 
=======
function nQueens(n, firstQueen) {
  // Create the initial board
>>>>>>> master
  const initialBoard = [];
  for (let i = 0; i < n; i++) {
    initialBoard[i] = Array(n);
    initialBoard[i].fill(0);
  }
  
  // Check if second parameter is an array and n is bigger than 20 or smaller than 4
  if (!Array.isArray(firstQueen) || n > 20 || n < 4) {
    return initialBoard;
  }

<<<<<<< HEAD
  // Vector
  const vector = Array(n);
=======
  const vector = Array(n); // Vector to store the rows and columns for each queen
>>>>>>> master

  vector[firstQueen[1]] = firstQueen[0]; // Place the first Queen

  const column = firstQueen[1]; // Get the column of the firstQueen
<<<<<<< HEAD
  
  return solveBoard(n, vector, column) ? drawBoard(vector) : initialBoard;
}

=======
  const descDiag = []; // Array to store the subtraction results for each element in the vector
  const ascDiag = []; // Array to store the sum results for each element in the vector
  
  // If a vector was returned, draw the board based on it; otherwise, return the initial board
  return solveBoard(n, vector, column, descDiag, ascDiag) ? drawBoard(vector) : initialBoard;
}

/**
 * Draw the board based on the final vector
 * @param {*} vector 
 */
>>>>>>> master
function drawBoard(vector) {
  const result = [];
  for (let i = 0; i < vector.length; i++) {
    result[i] = Array(vector.length);
    result[i].fill(0);
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < vector.length; j++) {
<<<<<<< HEAD
      if (i === vector[j]) {
        result[i][j] = 1;
=======
      if (i === vector[j]) { // If row of the result is equal to the element in the vector
        result[i][j] = 1;  // Place a Queen in that position
>>>>>>> master
      }
    }
  }

  return result;
}

<<<<<<< HEAD
function solveBoard(length, vector, column) {
  if (column === 0) {
    return solveBoardLeftToRight(length, vector, column);
  } else if (column === (length - 1)) {
    return solveBoardRightToLeft(length, vector, column);
  } else if (column > 0 && column < length - 1) {
    return solveBoardFromMiddle(length, vector, column);
  }
}

function solveBoardLeftToRight(length, vector, column) {
  let i = column + 1;
  while (i < length) {
    // console.log(vector);
    for (let j = 0; j < length; j++) {
      // console.log('i: ' + i, 'j: ' + j, 'i + 1: ' + (vector[i-1] + 1), 'i - 1: ' + (vector[i-1] -1),'j - i: ' + (j - i), 'j + i: ' + (j + i));
      if (
        j !== Number.parseInt(vector[i - 1]) && 
        j !== Number.parseInt((vector[i - 1] + 1)) && 
        j !== Number.parseInt((vector[i - 1] - 1)) && 
        !vector.includes(j) &&
        !descDiag.includes(j - i) &&
        !ascDiag.includes(j + i)
      ) {
        vector[i] = j;
=======
/**
 * Call a function to solve the board based on the initial Queen column
 * Any of the functions return the final vector or false if a solution could not be found
 * @param {*} length 
 * @param {*} vector 
 * @param {*} column 
 * @param {*} descDiag 
 * @param {*} ascDiag 
 */
function solveBoard(length, vector, column, descDiag, ascDiag) {
  if (column === 0) { // This means we are starting from the first column of the board
    return solveFromFirstColumn(length, vector, column, descDiag, ascDiag);
  } else if (column === (length - 1)) { // This means we are starting from the last column of the board
    return solveFromLastColumn(length, vector, column, descDiag, ascDiag);
  } else if (column > 0 && column < length - 1) { // This means we are somewhere in the middle of the board
    return solveFromMiddleColumn(length, vector, column, descDiag, ascDiag);
  }
}

/**
 * Returns a vector with the location for each Queen or false if no solution could be found
 * @param {*} length 
 * @param {*} vector 
 * @param {*} column 
 * @param {*} descDiag 
 * @param {*} ascDiag 
 */
function solveFromFirstColumn(length, vector, column, descDiag, ascDiag) {
  let i = column + 1; // Start the vector from the column next to the Queen's one
  while (i < length) {
    for (let j = 0; j < length; j++) {
      if (
        j !== Number.parseInt(vector[i - 1]) && // current number is different than the previous one in the vector
        j !== Number.parseInt((vector[i - 1] + 1)) && // current number is different than the previous one in the vector plus 1
        j !== Number.parseInt((vector[i - 1] - 1)) && // current number is different than the previous one in the vector minus 1
        !vector.includes(j) && // current number is not already in the vector
        !descDiag.includes(j - i) && // current number's subtraction result is not already in the array storing the results for all numbers in the vector
        !ascDiag.includes(j + i) // current number's sum result is not already in the array storing the results for all numbers in the vector
      ) {
        vector[i] = j; // add the number to the vector
>>>>>>> master
        descDiag[i] = (j - i); 
        ascDiag[i] = (j + i);
        break;
      }
    }
<<<<<<< HEAD
    if (typeof vector[i] === 'undefined' || vector[i] === null) {
      vector[i - 1] = undefined;
      i--;
=======
    if (typeof vector[i] === 'undefined' || vector[i] === null) { // if no number could met all conditions...
      vector[i - 1] = undefined; // remove it from the vector
      i--; // go back one position in the vector
>>>>>>> master
    } else {
      i++;
    }
    
<<<<<<< HEAD
    if (vector.every(num => typeof num === 'undefined')) {
      return false;
=======
    if (vector.every(num => typeof num === 'undefined')) { // if all numbers in the vector are undefined because none met the conditions 
      return false; // return false indicating there is no solution possible
>>>>>>> master
    }
  }

  return vector;
}

<<<<<<< HEAD
function solveBoardRightToLeft(length, vector, column) {
  let i = column - 1;
  while (i >= 0) {
    // console.log(descDiag, ascDiag, vector);
    for (let j = 0; j < length; j++) {
      // console.log('i: ' + i, 'j: ' + j, 'i + 1: ' + (vector[i+1] + 1), 'i - 1: ' + (vector[i + 1] -1),'j - i: ' + (j - i), 'j + i: ' + (j + i));
      if (
=======
/**
 * Returns a vector with the location for each Queen or false if no solution could be found
 * @param {*} length 
 * @param {*} vector 
 * @param {*} column 
 * @param {*} descDiag 
 * @param {*} ascDiag 
 */
function solveFromLastColumn(length, vector, column, descDiag, ascDiag) {
  let i = column - 1; // Start the vector from the column previous to the Queen's one
  while (i >= 0) {
    for (let j = 0; j < length; j++) {
      if ( // Same validations as in the previous function
>>>>>>> master
        j !== Number.parseInt(vector[i + 1]) && 
        j !== Number.parseInt((vector[i + 1] + 1)) && 
        j !== Number.parseInt((vector[i + 1] - 1)) && 
        !vector.includes(j) &&
        !descDiag.includes(j - i) &&
        !ascDiag.includes(j + i)
      ) {
        vector[i] = j;
        descDiag[i] = (j - i); 
        ascDiag[i] = (j + i);
      }
    }
    if (typeof vector[i] === 'undefined' || vector[i] === null) {
      vector[i + 1] = undefined;
      i++;
    } else {
      i--;
    }

    if (vector.every(num => typeof num === 'undefined')) {
      return false;
    }
  }

  return vector;
}

<<<<<<< HEAD
function solveBoardFromMiddle(length, vector, column) {
  if (solveBoardLeftToRight(length, vector, column) && solveBoardRightToLeft(length, vector, column)) {
=======
/**
 * Returns a vector with the location for each Queen or false if no solution could be found
 * It starts from the column of the first Queen to the end of the board, then again from the column
 * of the queen until the beginning of the board
 * @param {*} length 
 * @param {*} vector 
 * @param {*} column 
 * @param {*} descDiag 
 * @param {*} ascDiag 
 */
function solveFromMiddleColumn(length, vector, column, descDiag, ascDiag) {
  if ( // if both functions return a vector, we return it; otherwise, return false
    solveFromFirstColumn(length, vector, column, descDiag, ascDiag) && 
    solveFromLastColumn(length, vector, column, descDiag, ascDiag)
  ) {
>>>>>>> master
    return vector;
  }

  return false;
}

module.exports = nQueens;