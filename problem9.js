/*You can create a JavaScript function that takes an array of numbers as a parameter and returns the smallest number in the array like this*/

function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
    return Math.min(...numbers);
  }
  const numberArray = [10, 5, 8, 2, 15, 1];
  const smallestNumber = findSmallestNumber(numberArray); 
  console.log(smallestNumber);