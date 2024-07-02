// FUNCTION IMPLEMENTATION
const countLetters = function(str) {
  //make a new object
  let letterCount = {}; 
  for (let letter of str) {
    if (letter !== " "){
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }
  return letterCount;
};
module.exports = countLetters;