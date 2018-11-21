/**
 * Given an input of two strings, 
 * determine if one is a permutation of the other.
 * @author Ashaun Thomas
 */


 /**
  * Takes two strings, compares them to find if permutations
  * of one exists in the other, then returns true or false based
  * on those findings
  * TODO: Finish
  * @param string1 String to compare or compare to
  * @param string2 String to compare or compare to
  */
 function isPermutation(string1, string2) {
     let bigString = string1 >= string2 ? string1 : string2;
     let lilString = bigString === string1 ? string2 : string1;

     for (let i = 0; i < bigString.length - lilString.length; i++) {
         let counter = 0;
        let chunkSet = new Set(bigString.substr(i,i + lilString.length));
        let lilSet = new Set(lilString.split(''));
        
        chunkSet.forEach(function(letter) {
            if (!lilSet.has(letter)) {
                break;
            }
            else {
                counter++;
            }
        })
        if (counter === lilString.length) {
            return true;
        }   
    }
 }

 isPermutation('ashaun', 'thomas')