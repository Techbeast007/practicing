const { lstat } = require('fs');
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
  
  let maxProduct = fibonacci(numbers[0],numbers[1]);
  console.log(maxProduct);
  process.exit();
});

const FindModulo=(m)=>{
    for(let i=0;i<b*b;i++){
        let temp=current    
        current = (last+current)%BigInt(b)
        last = temp

    }

     // A Pisano Period starts with 0, 1
     if (previous === 0n && current === 1n) {
        return i + 1;  // Return the length of the period
      }
    }
    


const fibonacci=(n,b)=>{
    last=BigInt(0)
    current = BigInt(1);
    for(let i=2;i<=n;i++){
        let temp=last+current
        last = current
        current = temp

    }

   

    

    return Number(current%BigInt(b))

}