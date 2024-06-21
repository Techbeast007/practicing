const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputCount = 0;
let n;
let prices = [];
let clicks = [];

rl.on('line', (line) => {
  line = line.trim();

  if (inputCount === 0) {
    // Read n from the first line
    n = parseInt(line, 10);
  } else if (inputCount === 1) {
    // Read the sequence of integers for prices from the second line
    prices = line.split(' ').map(num => parseInt(num, 10));
  } else if (inputCount === 2) {
    // Read the sequence of integers for clicks from the third line
    clicks = line.split(' ').map(num => parseInt(num, 10));
  }

  inputCount++;

  // If we've read all input lines
  if (inputCount === 3) {
    // You can now process the input variables n, prices, and clicks as needed
    // For demonstration purposes, let's just print them
    results = advertisementsrevenue(n,prices,clicks)
    console.log(results)

    process.exit();
  }
});

const advertisementsrevenue=(n,prices,clicks)=>{
    let totalValue= 0;
    clicks.sort((a,b)=>b-a)
    prices.sort((a,b)=>b-a)

for(let i=0;i<n;i++){
    totalValue = totalValue+clicks[i]*prices[i]



}

return totalValue
}
