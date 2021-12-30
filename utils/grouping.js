exports.productGrouping = (arr) => {
    return Object.values(arr.reduce((acc, value) => {
        return Object.assign({}, acc, { [value.product_name]: acc[value.product_name] ? [...acc[value.product_name],...[value]] : [value] })
    }, {}))
}

exports.statesGroup = (arr, product) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].product_name !== product) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

exports.stateGrouping = (arr) => {
    return Object.values(arr.reduce((acc, value) => {
        return Object.assign({}, acc, { [value.address.state]: acc[value.address.state] ? [...acc[value.address.state],...[value]] : [value] })
    }, {}))
}

exports.cityGroup = (arr, state) => {
    for(let i = 0; i< arr.length; i++) {
        if(arr[i][0].address.state !== state) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
