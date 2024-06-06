const readline = require('readline')
process.stdin.setEncoding('UTF-8')
let numbers =[]
let a =null
let b = null

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
  });

  rl.on('line',(line)=>{
    numbers = line.split(' ').map(num=>parseInt(num,10)).filter(num=>!isNaN(num))
    a = numbers[0]
    b=numbers[1]
    console.log(a+b)
    process.exit()

  })