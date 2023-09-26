//create a promise that  calls a given function with a given argument and return the result in a new promise after two seconds
function callFunctionWithDelay(fn, arg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = fn(arg);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 2000);
    });
  }
  
  function exampleFunction(argument) {
    return argument * 2;
  }
  
  const argument = 5;
  
  callFunctionWithDelay(exampleFunction, argument)
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  