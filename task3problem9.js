//create a promise that resolves after one second and rejects after two seconds

function promiseWithTimeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved after 1 second");
      }, 1000);
  
      setTimeout(() => {
        reject("Promise rejected after 2 seconds");
      }, 2000);
    });
  }
  promiseWithTimeout()
    .then((result) => {
      console.log("Resolved:", result);
    })
    .catch((error) => {
      console.error("Rejected:", error);
    });
  