/*Write a function which takes a string as a parameter and returns true if the string is a palindrome and false otherwise. */

function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
    return Math.min(...numbers); 
  }
  const numberArray = [0, 5, 8, 2, 15, 1];
  const smallestNumber = findSmallestNumber(numberArray);
  console.log(smallestNumber);
  