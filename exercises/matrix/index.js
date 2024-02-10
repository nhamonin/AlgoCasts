// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrixArr = [];
  let start = 0;
  let end = n;

  const numbers = Array.from({ length: Math.pow(n, 2) });

  while (end <= n * n) {
    matrixArr.push(numbers.slice(start, end));
    start += n;
    end += n;
  }

  let count = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      matrixArr[startRow][i] = count++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrixArr[i][endColumn] = count++;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      matrixArr[endRow][i] = count++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      matrixArr[i][startColumn] = count++;
    }
    startColumn++;
  }

  return matrixArr;
}

module.exports = matrix;
