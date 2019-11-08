function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//O(n) Linear, because it accesses items from the array and multiplies them, and changes the final array in the result