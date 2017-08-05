/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 1) {
    	return 0;
    }
    if (n === 1) {
    	return 1;
    }
    if (n === 2) {
    	return 2;
    }
    var pre2 = 1;
    var pre1 = 2;
    var cur;
    for (var i = 3; i <= n; i++) {
    	cur = pre2 + pre1;
    	pre2 = pre1;
    	pre1 = cur;
    }
    return cur;
};

var n = 3;
console.log(climbStairs(n));
//