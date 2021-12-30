exports.statesGroup = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] !== value) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

