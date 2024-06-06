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
  
  let maxProduct = fibonacci(numbers[0], numbers[1]);
  console.log(maxProduct);
  process.exit();
});

// Function to find the Pisano period
const FindModulo = (b) => {
  let last = BigInt(0), current = BigInt(1);
  for (let i = 0; i < b * b; i++) {
    let temp = current;
    current = (last + current) % BigInt(b);
    last = temp;

    // A Pisano Period starts with 0, 1
    if (last === BigInt(0) && current === BigInt(1)) {
      return i + 1;  // Return the length of the period
    }
  }
  return -1; // This should never happen for positive b
}

// Function to compute the Fibonacci number modulo b using Pisano period
const fibonacci = (n, b) => {
  const pisanoPeriod = FindModulo(b);
  n = n % pisanoPeriod;

  if (n === 0) return 0;
  if (n === 1) return 1;

  let last = BigInt(0), current = BigInt(1);
  for (let i = 2; i <= n; i++) {
    let temp = last + current;
    last = current;
    current = temp;
  }

  return Number(current % BigInt(b));
}
