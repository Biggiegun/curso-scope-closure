// variables

var a; // declarando
var b = 'b'; // declaramos y asignamos !!
b = 'bb' // Reasignación
var a = 'aa' // redeclaración


// Global Scope
var fruit = 'Apple' // global (Variables asignadas en la parte superior del documento, o dentro del documento sin estar dentro de un bloque, función, etc.).
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}
bestFruit();


function countries(){
    country = 'Colombia'; // global
    console.log(country);
}


countries();
console.log(country);