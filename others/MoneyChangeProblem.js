const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  line = line.trim();
  
  // Assuming only one input is provided
  let numbers = line.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  
  let result = moneyChange(numbers[0]);
  console.log(result);
  process.exit();
});

function moneyChange(num) {
  let change = [6, 4, 1]
  let count = 0;

  for (let i = 0; i < change.length; i++) {
    while (num >= change[i]) {
      num -= change[i];
      count++;
    }
  }

  return count;
}
