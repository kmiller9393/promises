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
