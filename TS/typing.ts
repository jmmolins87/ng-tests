
// * String
let text: string = "Hello World!!";
// * Boolean
let isValid: boolean = true;
// * Number
let age: number = 10;
// * Array
let fruits: string[] = ['apple', 'banana', 'orange'];
let brands: Array<string> = ['BMW', 'Apple', 'Google'];
// * TemplateString
let myname: string = 'John';
let completeName: string = `My name is ${ text }`;
// * Tuple
let person: [ string, number ] = ['John', 25];
// * Enum
enum Color { Red, Green, Blue };
let myColor: Color = Color.Green;
// * Unknown
// Puede cambiar el tipo de dato
let notSure: unknown = 4;
notSure: 'Hello';
notSure: false;
// * Any
let undefindedValue: any = 4;
// Podemos cambiar el tipado
notSure = undefindedValue;
// * Void
// Si una función no retorna nada, se le asigna void
function log( message: string ): void {
    console.log( message );
}
