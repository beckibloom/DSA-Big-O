// 1. What's the Big O for this?
// Example 1 - playWithMyDog - O(n), because using array.find

function playWithMyDog(dogs) {
    let dog = dogs.find('golden')
    if (!dog) {
        return 'no goldens...how sad'
    }
    return dog
}

// Example 2 - whoHasAgolden - O(1), because you are just accessing the items in the array?Maybe?

function whoHasAgolden(dogs) {
    for (let i = 0; i < dogs.length; i++) {
        if (dogs[i] === 'golden') {
            return dogs[i]
        }
    }
    return 'no goldens...how sad'
}