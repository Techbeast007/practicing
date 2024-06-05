const { log } = require('console');
const readline = require('readline');

// Configure the readline interface for reading input from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// GCD function using the Euclidean algorithm
const GCD = (a, b) => {
    let aprime;
    let count=0;
    while (b !== 0) {
        aprime = a % b;
        a = b;
        b = aprime;
        count++
    }
    return a
};

// Listen for 'line' event to read the input
rl.on('line', (line) => {
    // Parse the input line to extract two numbers
    const numbers = line.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));
    if (numbers.length < 2) {
        console.log('Please provide two valid numbers.');
        return;
    }
    
    const a = numbers[0];
    const b = numbers[1];
    
    // Calculate and print the GCD of the two numbers
    console.log(GCD(a, b));
    
    // Exit the process after calculating the GCD
    process.exit();
});
