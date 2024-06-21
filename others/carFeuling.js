const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputCount = 0;
let d, m, n;
let stops = [];

rl.on('line', (line) => {
  line = line.trim();

  if (inputCount === 0) {
    // Read d from the first line
    d = parseInt(line, 10);
  } else if (inputCount === 1) {
    // Read m from the second line
    m = parseInt(line, 10);
  } else if (inputCount === 2) {
    // Read n from the third line
    n = parseInt(line, 10);
  } else if (inputCount === 3) {
    // Read the stops from the last line
    stops = line.split(' ').map(num => parseInt(num, 10));
  }

  inputCount++;

  // If we've read all input lines
  if (inputCount === 4) {
    // You can now process the input variables d, m, n, and stops as needed
   
   
    results = carFeuling(d,m,n,stops)
    console.log(results);
    process.exit();
  }
});

const carFeuling=(d,m,n,stops)=>{
    let max2 = m
    let count = 0
    stops.push(d)
    for(let i=0;i<n+1;i++){
            {
        if(max2>=stops[i-1] && max2<stops[i] && stops[i]-stops[i-1]<=m){
         
            count++
            

            max2 = m+stops[i-1]
            

        } else if(stops[i]-stops[i-1]>m){
            
            return -1
        } }
    }
    return count

}
