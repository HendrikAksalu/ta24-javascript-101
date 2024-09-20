// Global Scope
const fullName = "Karl Rauniste"; 
// DATA TYPES
// String => "See on string väärtus", 'See on samuti string väärtus', 
// Number (Int, Float) => 42
// Boolean => true/false, jah/ei, 1/0
// const lsMate => true/false
// Array => []
// Object => {}

// Muutujad - nimetus ja väärtus (NB: Muutumatu vs Muudetav)
// Muutujate nimetus on CamelCase and it makses some sense
const fruit = "Banaan"; // Muutuja, mida ei saa enam muuta
let model = "BMW"; // Muutuja, mida saab muuta

// Koodiblokk => SCOPE
// Koodiblokki tähistab () sümbol (objekti sümbol)
// Function Scope
const calculateSum = (number1, number2) => {
    
    // console.log (fullName);
    return number1 + number2;
};


calculateSum(5, 6);

// Type casting
// Muudame numbeer andmetüübi string andmetüübiks
const castNumber = "123456";
console.log("Minu andmetüüp on alguses", typeof castNumber);
console.log("Minu andmetüüp on lõpus", typeof castNumber);

console.log(typeof Number(castNumber))
console.log(Boolean(castNumber));

//Array => sümbol on [], toimub indekseerimine esimene element on kohal 0
const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"];


// console.log (characters[7]);
// console.log (characters[6]);
// console.log (characters[5]);
// console.log (characters[6]);
// console.log (characters[4]);
// console.log (characters[3]);
// console.log (characters[8]);
// console.log (characters[2]);
// console.log (characters[1]);
// console.log (characters[0]);

// Loopimine => Korduslause. Igast array elemendist minnakse üle ning käiakse läbi script
// For loop

for (i = 0; i < characters.length; i++) {
    console.log("For loop: ", characters [i]);
    }


// forEach loop
characters.forEach((char) => {
    console.log("For Each loop: ", char);
}) 

