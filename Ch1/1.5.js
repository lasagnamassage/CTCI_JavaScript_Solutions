/**
 * Given two strings, write a function to check if they are
 * one or zero edits away, given the following possible edits:
 * 1. Insert a character
 * 2. Remove a character
 * 3. Replace a character
 * TODO: Finish functions to test 3 edits
 * @author Ashaun Thomas
 */


 testCases = [
     ["pale", "ple"]
 ];

 function isEditAway(inputs) {
    if (inputs[0] === inputs[1]) {
        return true;
    }
    let map1 = hashify(inputs[0]);
    let map2 = hashify(inputs[1]);

 }


/**
 * TODO: Finish this
 * Checks for edit 1 possibility: character insertion
 * @param  string1 String to check for character insertion
 * @param  string2 String to check for character insertion
 * pale
 * dka
 */
function editOneCheck(map1, map2) {
    
}

/**
 * Turns a string into a JS-native hashmap implementation.
 * @param string String to be hashified 
 */
function hashify(string) {
    let map = new Map();
    for (let i = 0; i < string.length; i++) {
        let key = string.charAt(i);
        let value = map.has(key) ? map.get(key) + 1 : 1;
        map.set(key,value);
    }
    return map;
}

 function main() {
    for( let i = 0; i < testCases.length; i++) {
        console.log(isEditAway(testCases[i]));
    }
 }

 main();