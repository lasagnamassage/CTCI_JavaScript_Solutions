/**
 * A magic index in an array A[0...n-1] is
 * defined to be an index such that A[i] = i;
 * Given a sorted array of distinct integers, write
 * a method to find a magic index, if one exists, in
 * an array A.
 * @author Ashaun Thomas 
 */

 let testCases = [
     [-5,-2,0,4,5,10,14] //True, Magic number is 5
     [1,3,5,7,8,9] // False
 ];

 function initMagicFinder(array) {
    return magicWorker(array, 0, array.length - 1);
 }

 function magicWorker(array, start, end) {
    if (end < start) {
        return -1;
    }
    let mid = (start = end) / 2;
    if (array[mid] == mid) {
        return mid;
    }
    else if (array[mid] > mid) {
        return magicWorker(array, start, mid - 1);
    }
    else {
        return magicWorker(array, mid + 1, end);
    }
 }
