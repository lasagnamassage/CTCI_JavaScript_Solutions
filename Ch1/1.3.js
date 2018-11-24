/**
 * Replace all spaces in a string with '%20'.
 * Assume that the string has sufficient space
 * at the end to hold additional characters, and that you're
 * given the "true" length of the array (sans extra spaces for new string)
 * @author Ashaun Thomas
 */
const REPLACEMENT_VALUE = '%20';
var testCases = [
    ["Hello My Name Is Ashaun            ", 23 ],
    [" LOL TO THE M A X                  ", 17]
];


/**
 * Replaces spaces with given replacement value using
 * JavaScript's built-in slice and replace string methods.
 * Regex matches are used in replace function and  have time 
 * complexity of O(N), thus this function has O(N) where N is
 * the length of the string given (not including trailing spaces)
 * @param inputs Array containing a string element and a number element representing the length of the string sans spaces
 */
 function URLify(inputs) {
    let spaceRegex = /\s/g;
    let trimmedString = inputs[0].slice(0,inputs[1]);
    return trimmedString.replace(spaceRegex, REPLACEMENT_VALUE);
 }

 /**
  * Runs test cases
  */
 function main() {
     for (let i = 0; i < testCases.length; i++) {
        console.log(URLify(testCases[i]));
     }
 }

 main();

