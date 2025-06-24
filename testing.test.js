const { getInitials, createSlug, average } = require ('./refactoring.js')

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toBe("m,r")
})

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("STRINGA")).toBe("stringa")
})

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([2, 5, 6, 8, 9])).toBe(6)
})

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug("Questo è un test")).toBe("questo-e-un-test")
})