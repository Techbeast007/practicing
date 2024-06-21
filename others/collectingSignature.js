const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputCount = 0;
let n;
let segments = [];

rl.on('line', (line) => {
  line = line.trim();

  if (inputCount === 0) {
    // Read n from the first line
    n = parseInt(line, 10);
  } else {
    // Read the segments from the subsequent lines
    const [li, ri] = line.split(' ').map(Number);
    segments.push({ li, ri });
  }

  inputCount++;

  // If we've read all input lines
  if (inputCount === n + 1) {
    // Process the input
    const result = minimumPointsToCoverSegments(segments);
    console.log(result.length);
    console.log(result.join(' '));
    process.exit();
  }
});

const minimumPointsToCoverSegments=(segments)=>{
    let coordinatepoinst=[]
    let currentpoint=0
    segments.sort((a,b)=>a.ri-b.ri)
    for(let segment of segments){
        if(currentpoint===0 || currentpoint<segment.li){
            currentpoint = segment.ri
            coordinatepoinst.push(currentpoint)
        }
    }
    return coordinatepoinst
}

