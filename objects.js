//OBJECTS
// Objekti tähistab () koodibloki märgend
//Objekt on asi, millel on iseloomulikud tunnused
//Objekt koosneb key.value
//Objekti sees saame väärtust välja kutsuda kasutada punkti ning keyd.
const car = {
    brand: "Kia",
    model: "Proceed",
    year: 2024,
    isElecric: false,
    drive: function() {
        console.log("Drive please!")
    },

};

console.log(car.year);

console.log("Porche".toUpperCase());
console.log(car.drive());

//typeof operant
//Annab teada, mis andmetüüp on muutuja sisse salvestatud.

const harrypotter = 4;
console.log(typeof harrypotter)