const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputCount = 0;
let arrays = [];

rl.on('line', (line) => {
  line = line.trim();
  
  // Assuming each line has three space-separated integers
  let numbers = line.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));

  if (numbers.length === 3) {
    arrays.push(numbers);
    inputCount++;
  }

  if (inputCount === 2) {
    let result = lootproblem(arrays[0],arrays[1]);
    console.log(result);
    process.exit();
  }
});


let lootproblem=(v,w)=>{
   let Wmax = 9;
    let totalValue= 0;

    vperw = v.map((vi,index)=>{
        return vi/w[index]
    })
    vperw.sort((a,b)=>b-a)

    for(let i=0;i<vperw.length;i++){
   
     
            if(Wmax-w[i]>0){
                Wmax -= w[i]
                totalValue = totalValue+w[i]*vperw[i]

            } else {
                console.log("weight2",Wmax)
                console.log(i)
                totalValue = totalValue+Wmax*vperw[i]
                Wmax = Wmax-Wmax

            }
           

        
    }
    return totalValue

}


