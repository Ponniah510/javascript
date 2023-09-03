/*Write a function which takes a string and a number as parameters and returns the string repeated the specified number of times.*/

function repeatString(inputString, times) {
    let repeatedString = '';
    for (let i = 0; i < times; i++) {
      repeatedString += inputString;
    }
    return repeatedString;
  }
  const inputString = "Hello, ";
  const repeatCount = 3;
  const result = repeatString(inputString, repeatCount);
  console.log(result);