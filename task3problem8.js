//write a function  that takes array of promises and return a promise that resolves with the result of the promises in the array
function resolvePromises(promisesArray) {
    return Promise.all(promisesArray);
  }
  
  // Example usage:
  const promise1 = Promise.resolve(1);
  const promise2 = Promise.resolve(2);
  const promise3 = Promise.resolve(3);
  
  const promisesArray = [promise1, promise2, promise3];
  
  resolvePromises(promisesArray)
    .then((results) => {
      console.log('Results:', results);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  