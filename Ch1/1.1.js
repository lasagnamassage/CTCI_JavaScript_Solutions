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
 * This function checks to see if a string is unique by using
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

for (let i = 0; i < testCases.length; i++) {
    console.log(`${testCases[i]} is unique?  ${isUnique(testCases[i])}`);
}
