/**
 * Implement a method to perform string compression
 * using the counts of repeated characters.
 * For example, "aabccccaaa" would become "a2b1c4a3".
 * If the compressed string would not become smaller than
 * the original string, your method should return the original
 * string. Assume the string only has uppercase and lowercase
 * letters (a-z)
 * @author Ashaun Thomas
 */

 var testCases = [
     'aabccccaaa'
 ];

 function stringCompressor(string) {
    let prevChar = null;
    let charCounter = 0;
    let compressedString = '';
    for (let i = 0; i < string.length; i++) {
        let currentChar = string.charAt(i);
        if (!prevChar) {
            prevChar = currentChar;
            charCounter++;
        }
        else {
            if (prevChar === currentChar) {
                charCounter++;
            }
            else {
                compressedString += (prevChar + charCounter);
                currentCounter =  0;
            }
        }
        console.log('prevChar: ' + prevChar);
        console.log('currentChar: ' + currentChar);
        console.log('charCounter: ' + charCounter);
        console.log('compressedString: ' + compressedString);
    }   
    return compressedString;
 }


 /**
  * Runs test cases
  */
 function main() {
     for (let i = 0; i < testCases.length; i++) {
         console.log(stringCompressor(testCases[i]));
     }
 }

 main();