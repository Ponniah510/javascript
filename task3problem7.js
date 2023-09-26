//create a promise that calls a given function multiple times and returns an array of results
function callFunctionMultipleTimes(fn, times) {
    const promises = [];
  
    for (let i = 0; i < times; i++) {
      promises.push(new Promise((resolve, reject) => {
        try {
          const result = fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }));
    }
  
    return Promise.all(promises);
  }
  //example usage
  function getRandomNumber() {
    return Math.random();
  }
  
  const numberOfCalls = 5;
  
  callFunctionMultipleTimes(getRandomNumber, numberOfCalls)
    .then((results) => {
      console.log('Results:', results);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  