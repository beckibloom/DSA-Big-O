// 3. Are you here?

function areYouHere(arr1, arr2) {
    //determine if i is less than arr1.length
    for (let i = 0; i < arr1.length; i++) {
        //store the [i] item as a variable
        const el1 = arr1[i];
        //determine if j is less than arr2.length
        for (let j = 0; j < arr2.length; j++) {
            //store the [j] item as a variable
            const el2 = arr2[j];
            //compare the two values
            if (el1 === el2) return true;
        }
    }
    return false;
}

// Polynomial O(n^k), because it uses a nested for loop to compare items in loops from two different arrays