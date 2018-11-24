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
  * If string is even, the string must have two instances of any character in the string to
  * be a palindrome permutation. 
  * 
  * If string is odd, the string must have two instances of any character in the string except for one character,
  * the middle one...
  *  
  */


// tactcoa
// aacctto

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
    // console.log("String: " + sanitizedStr.length);
    // console.log("Set: " + sanitizedSet.size);
    // console.log("Expected length: " + expectedLength);
    return sanitizedSet.size === expectedLength ? true : false;
 }

 function isEven(string) {
     return string.length % 2 == 0;
 }

 function main() {
     for (let i = 0; i < testCases.length; i++) {
         console.log(isPalindromePermutation(testCases[i]));
     }
 }

 main();