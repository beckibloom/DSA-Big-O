function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) Linear, because this is acting to find the index of 1 item in the array using simple operations, accessing the array items, and comparing them to the item provided