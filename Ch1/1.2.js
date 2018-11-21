/**
 * Given an input of two strings, 
 * determine if one is a permutation of the other.
 * @author Ashaun Thomas
 */

 var testCases = [
     ["ash","ashaun"],
     ["dksald","eowqpeoqp"],
     ["(*$@", "@$*(#*@*#"],
     ["Hello", "Hello"],
     ["hello", "Hello"],
     ["\imlm", "\i\m\Omlm"],
     [" a r t ", "art"]
 ]


 /**
  * Takes two strings, compares them to find if permutations
  * of one exists in the other, then returns true or false based
  * on those findings
  * @param string1 String to compare or compare to
  * @param string2 String to compare or compare to
  */
 function isPermutation(string1, string2) {
    string1 = sanitize(string1);
    string2 = sanitize(string2);
    if (string1 === string2) {
        return true;
    }
    let bigString = string1 >= string2 ? string1 : string2;
    let lilString = bigString === string1 ? string2 : string1;
    let bigMap = mapify(bigString); 
    let lilMap = mapify(lilString);

    for (let keyPair of bigMap) {
        let letter = keyPair[0];
        let occurence = keyPair[1];
        if (lilMap.has(letter)) {
            let value = lilMap.get(letter) - occurence;
            lilMap.set(letter, value);
            if (lilMap.get(letter) <= 0) {
                lilMap.delete(letter);
            }
        }
        if (lilMap.size === 0) {
            return true;
        }
    }
    return false;
 }

 /**
  * This helper function converts input strings into
  * maps of letters and their occurances. O(N)
  * @param string String to be converted into a map
  * @return Resulting map with character/occurance key-pair
  */
 function mapify(string) {
    let result = new Map();
    string.split('').forEach(letter => {
        let value = result.has(letter) ? result.get(letter) + 1 : 1;
        result.set(letter, value);
    })
    return result;
 }

 /**
  * Converts strings to conventional format
  * @param string The string we want to convert
  * @return The converted string
  */
 function sanitize(string) {
     return string.replace('/\s/g', '');
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