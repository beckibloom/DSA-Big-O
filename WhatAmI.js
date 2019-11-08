// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    // if: n < 2 OR n % 1 AND NOT 0
    // return false
    // n must be greater or equal to 2
    // AND n must not be an integer
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        //if n is divisible by an integer less than itself, return false
        // n must not be an integer
        if (n % i == 0) return false;
    }
    return true;
}

//This algorithm will return a number that is not an integer that is 2 or greater
// O(1) Constant, because the for loop executes the same calculations each time 