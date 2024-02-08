// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  Array.from({ length: n }, (_, i) => i + 1).forEach((num) => {
    const multipleOfThree = num % 3 === 0;
    const multipleOfFive = num % 5 === 0;

    let res = '';

    if (multipleOfThree) {
      res += 'fizz';
    }

    if (multipleOfFive) {
      res += 'buzz';
    }

    console.log(res || num);
  });
}

module.exports = fizzBuzz;
