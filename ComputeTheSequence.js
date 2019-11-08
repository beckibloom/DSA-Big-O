// What does the following algorithm do?
// creates result as an empty array
// loops from 1 to the num provided
// for 1, pushes 0 to the array
// for 2, pushes 1 to the array
// else it adds a new number to the array that is equal to the sum of the previous two numbers
// returns the completed array of numbers

// What is its runtime complexity?
// for each loop it adds another item to the array until it reaches its num

//O(n) because it mainly inserts into the array

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}