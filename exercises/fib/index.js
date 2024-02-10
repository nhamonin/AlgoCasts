// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1. Iterative
// function fib(n) {
//   const result = [0, 1];

//   for (i = 2; i <= n; i++) {
//     result.push(result[i - 2] + result[i - 1]);
//   }

//   return result[n];
// }

// 2. Recursive
// function fib(n) {
//   return n < 2 ? n : fib(n - 1) + fib(n - 2);
// }

// 3. Recursive with memoization
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const argsString = args.toString();
    if (cache.get(argsString)) return cache.get(argsString);

    const res = fn(...args);
    cache.set(argsString, res);

    return res;
  };
}

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
