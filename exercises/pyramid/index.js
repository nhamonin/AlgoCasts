// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1. Recursion
// function pyramid(n, level = 1) {
//   const lineLength = 2 * n - 1;
//   const hashAmount = 2 * level - 1;
//   const sideSpaces = (lineLength - hashAmount) / 2;

//   console.log(' '.repeat(sideSpaces) + '#'.repeat(hashAmount) + ' '.repeat(sideSpaces));

//   if (level >= n) return;

//   pyramid(n, level + 1);
// }

// 2. Simple iteration over an array
function pyramid(n) {
  const lineLength = 2 * n - 1;

  Array.from({ length: n }, (_, i) => i + 1).forEach((step) => {
    const hashAmount = step * 2 - 1;
    const sideSpaces = (lineLength - hashAmount) / 2;

    console.log(' '.repeat(sideSpaces) + '#'.repeat(hashAmount) + ' '.repeat(sideSpaces));
  });
}

module.exports = pyramid;
