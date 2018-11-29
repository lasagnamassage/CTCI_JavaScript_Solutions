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
     'aabccccaaa',
     'aaaa',
     ' lwq '
 ];

 function stringCompressor(string) {
    let cachedChar = string.charAt(0);
    let compressedString = '';
    let freq = 1;
    for (let i = 1; i < string.length; i++) {
        let tempChar = string.charAt(i);
        if (cachedChar == tempChar) {
            freq++;
        }
        else {
            compressedString += `${cachedChar}${freq}`;
            cachedChar = tempChar;
            freq = 1; 
        }
    }
    compressedString += `${cachedChar}${freq}`;
    return compressedString.length < string.length ? compressedString : string;
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