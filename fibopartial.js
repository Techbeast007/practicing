const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let numbers = [];

rl.on('line', (line) => {
  line = line.trim();
  
 
  numbers = line.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));

  
  let maxProduct = fibonacciSumLastDigit(numbers[0],numbers[1]);
  console.log(maxProduct);
  process.exit();
});

function fibonacciSumLastDigit(m, n) {
  const pisanoPeriod = 60;
  
  // Function to compute the last digits of the Fibonacci sequence for one Pisano period
  function computePisanoPeriodLastDigits() {
      const lastDigits = [0, 1];
      for (let i = 2; i < pisanoPeriod; i++) {
          lastDigits.push((lastDigits[i - 1] + lastDigits[i - 2]) % 10);
      }
      return lastDigits;
  }

  const fibLastDigits = computePisanoPeriodLastDigits();
  
  // Reduce m and n modulo 60
  let m_mod = m % pisanoPeriod;
  let n_mod = n % pisanoPeriod;

  // Ensure m_mod <= n_mod by adjusting the range within the period
  if (n_mod < m_mod) {
      n_mod += pisanoPeriod;
  }

  // Sum the last digits in the range from m_mod to n_mod
  let lastDigitSum = 0;
  for (let i = m_mod; i <= n_mod; i++) {
      lastDigitSum = (lastDigitSum + fibLastDigits[i % pisanoPeriod]) % 10;
  }

  return lastDigitSum;
}


