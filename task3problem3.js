//write a function  that returns a promise and asynchronously returns the cartesian product of two arrays
function cartesianProductAsync(arr1, arr2) {
    return new Promise((resolve) => {
      const product = [];
      for (const item1 of arr1) {
        for (const item2 of arr2) {
          product.push([item1, item2]);
        }
      }
      resolve(product);
    });
  }
  const array1 = [1, 2];
  const array2 = ['a', 'b', 'c'];
  
  cartesianProductAsync(array1, array2)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  