//create a promise that attempts to read a file and upon sucess or failure resolve or reject that promise respectively
const fs = require('fs');

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error); // Reject the promise if there's an error
      } else {
        resolve(data); // Resolve the promise with the file content
      }
    });
  });
}

// Example usage:
const filePath = 'example.txt'; // Replace with your file path

readFilePromise(filePath)
  .then((fileContent) => {
    console.log('File content:', fileContent);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
