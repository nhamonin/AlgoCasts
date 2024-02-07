// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1. Array.prototype.reverse()
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// 2. for of loop
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// 3. Array.prototype.reduce()
function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
