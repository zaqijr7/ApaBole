const apaBole = (value) => {
    if(typeof value !== 'number' || value < 1) {
        return 'Invalid Input'
    }
    let result = ''
    for(let index = 1; index <= value; index++){
        if ( index % 3 === 0 && index % 5 === 0) {
            result += 'ApaBole'
        } else if (index % 5 === 0) {
            result += 'Bole'
        } else if (index % 3 === 0) {
            result += 'Apa'
        } else {
            result += `${index}`
        }

        if(index !== value){
            result += ', '
        }
    }
    return result
}

console.log(apaBole(100));