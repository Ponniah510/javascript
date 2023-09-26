const data = [1, 2, 3, 4, 5];
//write a contents of an array using a promise chain
function logItem(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve();
    }, 1000);
  });
}
data.reduce((promiseChain, item) => {
  return promiseChain.then(() => {
    return logItem(item);
  });
}, Promise.resolve())
  .then(() => {
    console.log("All items logged.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
