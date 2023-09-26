//
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolved");
      resolve();
    }, 2000);
  });
  
  myPromise.then(() => {
  }).catch((error) => {
  });
  