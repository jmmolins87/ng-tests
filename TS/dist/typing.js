// * String
let text = "Hello World!!";
// * Boolean
let isValid = true;
// * Number
let age = 10;
// * Array
let fruits = ['apple', 'banana', 'orange'];
let brands = ['BMW', 'Apple', 'Google'];
// * TemplateString
let myname = 'John';
let completeName = `My name is ${text}`;
// * Tuple
let person = ['John', 25];
// * Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let myColor = Color.Green;
// * Unknown
// Puede cambiar el tipo de dato
let notSure = 4;
notSure: 'Hello';
notSure: false;
// * Any
let undefindedValue = 4;
// Podemos cambiar el tipado
notSure = undefindedValue;
// * Void
// Si una función no retorna nada, se le asigna void
function log(message) {
    console.log(message);
}
