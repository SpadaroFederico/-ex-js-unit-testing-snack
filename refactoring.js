function getInitials(fullName){
    return fullName
    .trim()
    .split(/\s+/)
    .map(w => w[0].toLowerCase())
    .join()
}

function createSlug(str){
    return str
    .toLowerCase()
}

function average(numbers){
    const somma = numbers.reduce((acc, val) => acc + val, 0);
    return somma / numbers.length;
}


module.exports = {
    getInitials,
    createSlug,
    average,
    
}