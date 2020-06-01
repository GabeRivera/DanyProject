// This is a classic programing problem.
// It's a great starting point

// PROBLEM:
// Write a program that console.log()s
// Every number from 1 - 100
// If a number is divisible by 3 console.log('Fizz')
// If the number is divisible by 5 console.log('Buzz')
// If the number is divisible by both, console.log('FizzBuzz');
// Example: 1, 2, FIZZ, 4, BUZZ... 14, FIZZBUZZ


// Todo:
// 1) fix the problem i / 3 && i / 5 !== fizzbuzz
// 2) write cleaner
// DRY : Don't Repeat Yourself

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    }
   else console.log(i);
  }