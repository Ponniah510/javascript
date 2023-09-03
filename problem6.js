/*Write a function which takes two strings as parameters and checks if the second string is a substring of the first */

function isSubstring(mainString, subString) {
    return mainString.indexOf(subString) !== -1;
  }
  const str1 = "Hello, world!";
  const str2 = "world";
  const result = isSubstring(str1, str2);
  console.log(result);