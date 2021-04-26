const apaBole = (value) => {
    if(typeof value !== 'number' || value < 1) {
        return 'Invalid Input'
    }
    let array = []
    for(let index = 1; index <= value; index++){
        if ( index % 3 === 0 && index % 5 === 0) {
            array.push('ApaBole')
        } else if (index % 5 === 0) {
            array.push('Bole')
        } else if (index % 3 === 0) {
            array.push('Apa')
        } else {
            array.push(index)

        }
    }

    const result = array.join(', ')

    return result
}

console.log(apaBole(100));