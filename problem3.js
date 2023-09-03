/*Create a function which takes an array of numbers as a parameter and returns the sum of all the numbers in the array */

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  const numbers = [10, 20, 30, 40];
  const result = sumArray(numbers);
  console.log(result);