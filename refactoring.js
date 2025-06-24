function getInitials(fullName){
    return fullName
    .trim()
    .split(/\s+/)
    .map(w => w[0].toLowerCase())
    .join()
}

function createSlug(input){
    return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
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