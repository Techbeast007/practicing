var readline = require('readline');

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
  
  let maxProduct = fibonacci(numbers);
  console.log(maxProduct);
  process.exit();
});

const fibonacci=(n)=>{
    let array = []
    array[0]=0
    array[1] = 1;
    for(let i=2;i<=n;i++){
        array[i]=array[i-1]+array[i-2]

    }
    return array[n]

}