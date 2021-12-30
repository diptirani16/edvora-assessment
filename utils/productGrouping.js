exports.productGrouping = (arr) => {
    return Object.values([...arr].reduce((acc, value) => {
        return Object.assign({}, acc, { [value.product_name]: acc[value.product_name] ? [...acc[value.product_name],...[value]] : [value] })
    }, {}))
}
