/*Create a function which takes a number as a parameter and prints out “Fizz” if the number is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.*/

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
  fizzBuzz(15); 
  fizzBuzz(9);  
  fizzBuzz(10); 
  fizzBuzz(7); 
