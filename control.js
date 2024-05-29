var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputCount = null;
let numbers = [];

rl.on('line', (line) => {
  line = line.trim();

  if (inputCount === null) {
    // First line indicates how many numbers will follow
    inputCount = parseInt(line, 10);
    if (isNaN(inputCount) || inputCount <= 0) {
      console.log('Please enter a valid positive number.');
      process.exit();
    }
  } else {
    // Second line contains the numbers
    numbers = line.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));
    if (numbers.length !== inputCount) {
      console.log(`Please enter exactly ${inputCount} numbers separated by spaces.`);
      process.exit();
    } else {
      let maxProduct = findMaxPairwiseProduct(numbers);
      console.log(maxProduct);
      process.exit();
    }
  }
});

// Function to find the maximum pairwise product
function findMaxPairwiseProduct(numbers) {
  let n = numbers.length;
  
  if (n < 2) {
    return 0; // No pairs exist
  }
  
  let max1 = -Infinity, max2 = -Infinity;
  
  for (let i = 0; i < n; i++) {
    if (numbers[i] > max1) {
      max2 = max1;
      max1 = numbers[i];
    } else if (numbers[i] > max2) {
      max2 = numbers[i];
    }
  }
  
  return max1 * max2;
}
