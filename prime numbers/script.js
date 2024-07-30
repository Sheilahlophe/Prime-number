// Define the range
const startRange = 2;
const endRange = 50;

// Function to check and print prime numbers within the range
function findPrimes(start, end) {
    for (let i = start; i <= end; i++) {
        let isPrime = true;
        
        if (i <= 1) {
            isPrime = false; // 1 and numbers less than 1 are not prime numbers
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        if (isPrime) {
            console.log(i + " is a prime number.");
        }
    }
}

// Call the function with the specified range
findPrimes(startRange, endRange);
