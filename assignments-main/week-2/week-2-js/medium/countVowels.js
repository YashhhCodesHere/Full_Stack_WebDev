/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  let totalVowels = 0;
  for(const i of str){
    if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
      totalVowels += 1;
    }
  }
  return totalVowels;
}

module.exports = countVowels;