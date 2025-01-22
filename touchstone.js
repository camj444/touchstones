// Coin Flip Simulation Program
// This program simulates flipping a coin multiple times and calculates the number of heads and tails.

// Import readline module for user input
const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for the number of coin flips
rl.question("Enter the number of coin flips: ", (input) => {
    // Convert input to a number
    const flips = parseInt(input);

    // Check if the input is a valid positive number
    if (isNaN(flips) || flips <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        rl.close();
        return;
    }

    // Initialize counters for heads and tails
    let heads = 0;
    let tails = 0;

    // Simulate coin flips
    for (let i = 0; i < flips; i++) {
        const result = Math.floor(Math.random() * 2); // Generate 0 or 1
        if (result === 0) {
            heads++; // Increment heads counter
        } else {
            tails++; // Increment tails counter
        }
    }

    // Display the results to the user
    console.log(`Heads: ${heads}`);
    console.log(`Tails: ${tails}`);

    // Close the input interface
    rl.close();
});
