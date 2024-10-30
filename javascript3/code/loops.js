// Loops allow you to execute code repeatedly based on a condition.

// Task 1: Write a for loop to print numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Task 2: Create a while loop that prints the numbers 10 to 15.
 let num = 10
 while (num <= 15) {
        console.log(num);
        num++;  
    }
   
 


// Task 3. Write for-loop that loops through the array `numbers`
// compare every number with the variable `lowest`.
// If the number is lower than `lowest` update `lowest` to the current number
// Use console.log to print `lowest`.
const numbersarr = [9, 10, 17, 34, 2, 4, 100];
let lowest = numbersarr[0];

for (let i = 1; i < numbersarr.length; i++) { 
    if (numbersarr[i] < lowest) { 
        lowest = numbersarr[i]; 
    }
}

console.log(lowest); 

// Task 4, Write a function `getLowest` that takes an array of numbers as
// input and returns the lowest number.
function getLowest(numbers) {
    let lowest = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) { 
        if (numbers[i] < lowest) { 
            lowest = numbers[i]; 
        }
    }

    return lowest; 
}


const numbers = [9, 10, 17, 34, 2, 4, 100];
const numbers2 = [3,5,100,2]
console.log(getLowest(numbersarr)); 
console.log(getLowest(numbers)); 
console.log(getLowest(numbers2)); 

