// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1. Compare with reversed string
// function palindrome(str) {
//   return str === str.split``.reduce((reversed, character) => character + reversed, '');
// }

// 2. Efficient solution with early return and O(n/2) complexity
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
}

module.exports = palindrome;
