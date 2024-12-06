//FUNCTIONS
//Funktsioone kasutame korduvate tegevuste autamatiseerimiseks.
//Funktsioon võtab sulgude vahele parameetrid (placeholders)
//Keyword return tagastab misiganes peale teda tuleb;
//return() siis saab korraga tagastada
function sum(num1, num2){
    return num1 + num2; 
}

/**
 * IIFE - funktsioon mis kutsutakse automaatselt välja.
 */

(() => {
    return 2 -1;
})();

/**
 * Arrow functions
 */

const fullName = (firstName, lastName) => {
    //return firstName + ' ' + lastName;
    return `${firstName} ${lastName}`;
}

console.log(fullName("Hendrik", "Aksalu"));