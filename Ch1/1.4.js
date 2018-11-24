/**
 * Given a string, check if its a permutation of
 * a palindrome. The palindrome doesn't have to be
 * a valid English word
 * @author Ashaun Thomas
 */

 var testCases = [
     "tact coa",
     "hannah",
     "dksladka dksld kasldk sal",
     "racecar", 
     "Repaper"
 ]


 /**
  * Checks to see if an input string is a palindrome permutation by
  * using the built-in Set object's property of not having more than one
  * entry of equivalent value.
  * @param string The string we're testing 
  */
 function isPalindromePermutation(string) {
    let sanitizedStr = string.replace(/\s/g,'').toLowerCase().split('').join('');
    let sanitizedSet = new Set(sanitizedStr);
    let expectedLength;
    if (isEven(sanitizedStr)) {
        expectedLength = sanitizedStr.length/2;
    }
    else {
        expectedLength = Math.floor(sanitizedStr.length/2 + 1);
    }
    return sanitizedSet.size === expectedLength ? true : false;
 }

 /**
  * Checks to see if a string has an even number of characters
  * or not.
  * @param string String to check.
  */
 function isEven(string) {
     return string.length % 2 == 0;
 }

 function main() {
     for (let i = 0; i < testCases.length; i++) {
         console.log(isPalindromePermutation(testCases[i]));
     }
 }

 main();