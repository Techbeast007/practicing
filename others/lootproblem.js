const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputCount = 0;
let n, W;
let costs = [];
let weights = [];

rl.on('line', (line) => {
  line = line.trim();
  
  if (inputCount === 0) {
    // Read n and W from the first line
    [n, W] = line.split(' ').map(num => parseInt(num, 10));
  } else {
    // Read costs and weights from subsequent lines
    let [ci, wi] = line.split(' ').map(num => parseInt(num, 10));
    costs.push(ci);
    weights.push(wi);
  }

  inputCount++;
  
  // If we've read all lines (n compounds)
  if (inputCount === n + 1) {
    let result = lootProblem(costs, weights, W);
    console.log(result);
    process.exit();
  }
});


let lootProblem=(v,w,Wmax)=>{
    let totalValue= 0;

    let items = v.map((vi, index) => ({
      value: vi,
      weight: w[index],
      valuePerWeight: vi / w[index]
    }));
    items.sort((a,b)=>b.valuePerWeight-a.valuePerWeight)

    for(let i=0;i<items.length;i++){
   
     
            if(Wmax-items[i].weight>0){
                Wmax -= items[i].weight
                totalValue = totalValue+items[i].weight*items[i].valuePerWeight

            } else {
                totalValue = totalValue+Wmax*items[i].valuePerWeight
                Wmax = Wmax-Wmax

            }
           

        
    }
    return totalValue

}


