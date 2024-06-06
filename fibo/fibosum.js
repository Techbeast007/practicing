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
  
  let maxProduct = fibonacci(numbers[0]);
  console.log(maxProduct);
  process.exit();
});


// Function to compute the Fibonacci number modulo b using Pisano period
const fibonacci = (n) => {
  let n3 = n%60==0?60:n%60
  let CurrentSum = BigInt(1)

  let last = BigInt(0), current = BigInt(1);
  if (n <= 1) {
    return n;
  }
  if(n>60){
    for (let i = 2; i <= n3; i++) {
        let temp = (last + current)%BigInt(10);
        last = current;
        current = temp;
        CurrentSum = (CurrentSum+current)%BigInt(10)
      }
    

  } else if(n<60){
    for (let i = 2; i <= n; i++) {
        let temp = (last + current)%BigInt(10);
        last = current;
        current = temp;
        CurrentSum = (CurrentSum+current)%BigInt(10)
      }

  }

  return Number(CurrentSum );
}
