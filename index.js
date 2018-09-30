//1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve(`${num} is greater than or equal to 10, success!`);
    } else {
      reject(`${num} is less than 10, error!`);
    }
  });
};

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error));

//2. Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

let allWords = ['wowow', 'pants', 'bird'];
let notAllWords = ['wowow', 5, 'bird'];

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject(
        'No, the array you passed in contained an element that was not a string!'
      );
    }
  });
};

const sortWords = word => {
  return new Promise((resolve, request) => {
    if (word.length) {
      resolve(word.sort());
    } else {
      reject();
    }
  });
};

makeAllCaps(allWords)
  .then(allWords => sortWords(allWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(notAllWords)
  .then(notAllWords => sortWords(notAllWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// What is .then() used for, and what is .catch() used for?
// .then() is used and triggered when a successful response (i.e. when a promise resolves successfully) is retrieved from the server; .then() is used to resolve a Promise.
// .catch() is used to trigger an error when an unsuccessful response is retrieved from the server.

// What are good use cases for Promises?
// Promises are used to help you manage asynchronous code and because fetch has Promises built in to it, you are able to make your own functions using Promises.

// What other libraries/functions can you find that use Promises?
// In Node, we will/can use Promises on the backend to ensure that the a response was successfully retrieved from the database. The Axios HTTP client for JavaScript uses Promises as well.
