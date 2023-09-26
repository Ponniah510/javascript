//write a function that takes the url as an argument and returns  a promise which resolves with the json parsed response body of the request

function fetchJson(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  const url = 'https://jsonplaceholder.typicode.com/posts/1'; 
  
  fetchJson(url)
    .then((jsonResponse) => {
      console.log('JSON Response:', jsonResponse);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  