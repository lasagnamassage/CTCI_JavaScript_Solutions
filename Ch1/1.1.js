/**
 * Determines if a string has all unique characters.
 * @author Ashaun Thomas
 */

let testCases = [
    'abcd',
    'abbc',
    '1234'
];

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
