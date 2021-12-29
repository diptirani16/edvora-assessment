exports.productGrouping = (arr) => {
    return Object.values(arr.reduce((acc, value) => {
        return Object.assign({}, acc, { [value.product_name]: acc[value.product_name] ? [...acc[value.product_name],...[value]] : [value] })
    }, {}))
}

// const arr = [
//     {"name": "diptirani", "rollno": "CT19007" }, 
//     {"name": "diptirani", "rollno": "CT19008"},
//     {"name": "bhaiya", "rollno": "gfshhs"},
//     {"name": "bhaiya", "rollno": "hteyds"}
// ]
// const x = productGrouping(arr)
// console.log(x)

// result: [
//     [
//         {"name": "diptirani", "rollno": "CT19007" }, 
//         {"name": "diptirani", "rollno": "CT19008"},
//     ],
//     [
//         {"name": "bhaiya", "rollno": "gfshhs"},
//         {"name": "bhaiya", "rollno": "hteyds"} 
//     ]
// ]