function stringDecoder(code) {

    let splitString = code.split('')

    let result = ''
    console.log(splitString)
    for (let i = 0; i < splitString.length; i++) {
        if (!isNaN(+splitString[i])) {
            i += +splitString[i]
        } else {
            result += splitString[i]
        }

    }
    return result
}

console.log(stringDecoder('2bna0p1mp2osl0e'))