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
  
  let maxProduct = fibonacci(numbers);
  console.log(maxProduct);
  process.exit();
});

const fibonacci=(n)=>{
  let n3 = n%60==0?60:n%60  
    last=BigInt(0)
    current = BigInt(1);
    if(n<=1){
      return n
    }
    if(n>60){
    for(let i=2;i<=n3;i++){
        let temp=last+current
        last = current
        current = temp

    }} else {
        for(let i=2;i<=n;i++){
            let temp=last+current
            last = current
            current = temp
    
        }

    }

    return Number(current%BigInt(10))

}