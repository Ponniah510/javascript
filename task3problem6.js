//write a function that takes url as an agrument and return a promise which resolves with the response body of the body
const https = require('https');
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP error! Status: ${response.statusCode}`));
        return;
      }

      let responseBody = '';

      response.on('data', (chunk) => {
        responseBody += chunk;
      });

      response.on('end', () => {
        resolve(responseBody);
      });
    })
    .on('error', (error) => {
      reject(error);
    });
  });
}
const url = 'https://example.com'; 

fetchUrl(url)
  .then((responseBody) => {
    console.log('Response body:', responseBody);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
