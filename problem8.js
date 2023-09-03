/*You can create a JavaScript function that takes an array of numbers as a parameter and returns the smallest number in the array like this*/

function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }
  const numberArray = [10, 5, 8, 2, 15, 1];
  const smallestNumber = findSmallestNumber(numberArray);
  console.log(smallestNumber);