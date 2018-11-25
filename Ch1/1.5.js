/**
 * Given two strings, write a function to check if they are
 * one or zero edits away, given the following possible edits:
 * 1. Insert a character
 * 2. Remove a character
 * 3. Replace a character
 * @author Ashaun Thomas
 */

 testCases = [
     ["pale", "ple"], //true
     ["pale", "ppl"], //false
     ["pale", "pwle"] //true
 ];

 function isEditAway(inputs) {
    // best case of identical strings, thus true
    if (inputs[0] === inputs[1]) {
        return true;
    }
    // best case of no possible single edit solution due to
    // out of bounds length difference, thus false
    if (Math.abs(((inputs[0].length - inputs[1].length)) > 1)) {
        return false;
    }
    
    let map1 = hashify(inputs[0]);
    let map2 = hashify(inputs[1]);
    if (inputs[0].length === inputs[1].length) {
        // We can only run a replace edit in this case
        if (editThreeCheck(map1, map2)) {
            return true;
        }
    }
    else {
        // We can only run add or remove edits in this case
        if (editOneOrTwoCheck(map1,map2)) {
            return true;
        }

        return false;
    }
 }


/**
 * Checks for edit 1 or two possibility: character insertion
 * by popping matching Map pair occurances until left
 * with 1 set in the largest map in the event of 'true',
 * or some value not equal to one in the event of 'false'
 * @param  map1 String to check for character insertion
 * @param  map2 String to check for character insertion
 */
function editOneOrTwoCheck(map1, map2) {
    let remainderMaps = extractLikeTerms(map1, map2);
    if ((remainderMaps[0].size === 0 && remainderMaps[1].size === 1) ||
        (remainderMaps[1].size === 0 && remainderMaps[0].size === 1)) {
            return true;
    }
    return false;
}   

/**
 * Checks for edit 3 possibility: replace a character
 * @param {*} map1 String to check for character insertion
 * @param {*} map2 String to check for character insertion
 */
function editThreeCheck(map1, map2) {
    let remainderMaps = extractLikeTerms(map1, map2);
    if (remainderMaps[0].size === remainderMaps[1].size) {
        return true;
    }
    return false;

}

/**
 * Helper function that turns a string into a JS-native 
 * hashmap implementation.
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

/**
 * Helper function that removes like entries and occurences
 * from two maps.
 * @param map1 Map to operate on
 * @param map2 Map to operate on
 * @return Array of the modified map1 and map2
 */
function extractLikeTerms(map1, map2) {
    for (let [key, value] of map1) {
        if (map1.has(key) && map2.has(key)) {
            map2.set(key, value - 1);
            map1.set(key, value - 1);
            if (map2.get(key) == 0) {
                map2.delete(key);
            }
            if (map1.get(key) == 0) {
                map1.delete(key);
            }
        }
    }
    return [map1, map2];
}

/**
 * Runs test cases
 */
 function main() {
    for( let i = 0; i < testCases.length; i++) {
        console.log(isEditAway(testCases[i]));
    }
 }

 main();