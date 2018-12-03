/**
 * A child is running up a staircase with n steps and can hop
 * either 1, 2, or 3 steps at a time. Implement a method
 * to count how many possible ways the child can run up
 * the stairs. 
 * @author Ashaun Thomas
 */

var memo = new Map();

function countWaysMemo(n) {
    if (n < 0) {
        return 0;
    }
    else if (n == 0) {
        return 1;
    }
    else if (memo.has(n)) {
        return memo.get(n);
    }
    else {
        memo.set(n, countWaysMemo(n-1) + countWaysMemo(n-2) + countWaysMemo(n-3));
        return memo.get(n);
    }
}

console.log(countWaysMemo(10));