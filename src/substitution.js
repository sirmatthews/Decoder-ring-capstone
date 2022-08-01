// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
   
    
  function substitution(input, alphabet, encode = true) {
    //set defaults
      if (!input || !alphabet || alphabet.length !== 26){return false};
      if (Array.from(new Set(alphabet)).length !== 26){return false};
//set variables
      let abcs = 'abcdefghijklmnopqrstuvwxyz';
      alphabet = alphabet.split('');
      input = input.toLowerCase();
      let subResult = {};
      let decode = {};
      let result = '';
//forEach, map and arrow funct through
      abcs.split('').forEach((letter, index) => {
          subResult[letter] = alphabet[index];
          decode[alphabet[index]] = letter;
      })
//if encode is false
      if (!encode) subResult = decode;
      input.split('').forEach(input => {
          result += input === ' ' ? ' ' : subResult[input]
      })
//return it
      return result;
  }
//END OF SUBSTITUTION FUNCTION
    
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };