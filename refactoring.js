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


module.exports = {
    getInitials,
    createSlug,
}