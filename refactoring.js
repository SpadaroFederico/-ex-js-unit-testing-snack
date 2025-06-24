function getInitials(fullName){
    return fullName
    .trim()
    .split(/\s+/)
    .map(w => w[0].toLowerCase())
    .join()
}

function createSlug(str) {
  if (typeof str !== "string" || str.trim() === "") {
    throw new Error("Titolo non valido");
  }

  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

const posts = [
  { id: 1, title: "Post di esempio uno" },
  { id: 2, title: "Secondo articolo" },
  { id: 3, title: "Ultime notizie" }
].map(post => ({
  ...post,
  slug: createSlug(post.title)
}));

function findPostById(posts, id) {
  return posts.find(post => post.id === id);
}

function average(numbers){
    const somma = numbers.reduce((acc, val) => acc + val, 0);
    return somma / numbers.length;
}

function isPalindrome(str){
    const cleaned = str.toLowerCase().replace(/\s+/g, '')
    return cleaned === cleaned.split('').reverse().join('')
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById, 
    posts,
}