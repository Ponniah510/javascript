/*Write a function which takes three numbers as parameters and returns their average */

function calculateAverage(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    return average;
  }
  const result = calculateAverage(10, 20, 30);
  console.log(result);