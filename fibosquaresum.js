const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let numbers = [];

rl.on('line', (line) => {
  line = line.trim();
  
  // Assuming only one input is provided
  numbers = line.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  
  let lastDigitSumSquares = fibonacciSumSquaresLastDigit(numbers[0]);
  console.log(lastDigitSumSquares);
  process.exit();
});

// Function to compute the last digit of the sum of squares of Fibonacci numbers
const fibonacciSumSquaresLastDigit = (n) => {
  const pisanoPeriod = 60; // Pisano period for modulo 10

  let n1 = n % pisanoPeriod;
  let n2 = (n + 1) % pisanoPeriod;

  let fib = [0, 1];
  for (let i = 2; i <= Math.max(n1, n2); i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 10;
  }

  let Fn = fib[n1];
  let Fn1 = fib[n2];

  return (Fn * Fn1) % 10;
}

