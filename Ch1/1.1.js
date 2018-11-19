/**
 * Determine if a string has all unique characters.
 * @author Ashaun Thomas
 */

let testCases = [
    'abcd',
    'abbc',
    '1234'
];

/**
 * Checks to see if a string is unique by using
 * the built-in Set object. This implementation takes advantage
 * of the fact that the Set object doesn't allow duplicates by
 * comparing the size of the array as a set. All duplicates would
 * be removed in the set, causing it's size to be smaller than the
 * length of an array representing the string
 * @param string String of characters to analyze
 */
function isUnique(string) {
    let inputStringArr = string.toLowerCase().split('');
    let inputSet = new Set(inputStringArr);
    if (inputStringArr.length > inputSet.size) {
        return false;
    }
    else {
        return true;
    }
}

/**
 * Checks to see if a string is unique without the use of 
 * additional data structures.
 * TODO: Fix this, it's broken :(
 * @param string String of characters to analyze
 */
function isUniqueNoDataStructures(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++ ) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
    
}

for (let i = 0; i < testCases.length; i++) {
    console.log(`${testCases[i]} is unique?  ${isUnique(testCases[i])}`);
}

console.log('----------------No data structures---------------------');

for (let i = 0; i < testCases.length; i++) {
    console.log(`${testCases[i]} is unique? ${isUniqueNoDataStructures(testCases[i])}`);
}