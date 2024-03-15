function generateNumbers(num1, num2) {
    // Ensure num1 is less than num2
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    // Generate numbers between num1 and num2
    for (let i = num1 + 1; i < num2; i++) {
        process.stdout.write(i + ", ");
    }
}

// Example usage
const num1 = 10;
const num2 = 25;
generateNumbers(num1, num2);
