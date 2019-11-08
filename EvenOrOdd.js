// 2. Even or odd
// What is the Big O of the following algorithm?
// Explain your answer.

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }

// This would be O(1) because no matter the size of the value there is only one operation on the given value to calculate 