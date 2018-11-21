/**
 * Given an input of two strings, 
 * determine if one is a permutation of the other.
 * @author Ashaun Thomas
 */

 var testCases = [
     ["ash","hsa"], // true
     ["aiskl","nmca"], // false
     ["(*$@", "@$*("], // true
     ["Hello", "Hello"], // true
     ["hello", "Hello"], // true
     ["\imlm", "\i\m\Omlm"], // true
     [" a r t ", "art"] // true
 ]


 /**
  * Takes two strings and compares them by sorting the 
  * characters and comparing the results.
  * @param string1 String to compare or compare to
  * @param string2 String to compare or compare to
  */
 function isPermutation(string1, string2) {
    // Same string edge case
    if (string1.length != string2.length) {
        return false;
    }
    rStr1 = sanitize(string1);
    rStr2 = sanitize(string2);
    if (rStr1 === rStr2) {
        return true;
    }
    else {
        return false;
    }
 }

 /**
  * Converts strings to intended format
  * @param string The string we want to convert
  * @return The converted string
  */
 function sanitize(string) {
     return string.replace('/\s/g', '').split('').sort().join('');
 }

 /**
  * This function runs the desired function over test inputs.
  */
 function main() {
    for (let i = 0; i < testCases.length; i++) {
        console.log(isPermutation(testCases[i][0], testCases[i][1]));
    }
 }


main();