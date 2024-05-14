

interface IAnimal {
    name: string;
    age: number;
    // !Propiedades ocpionales
    color?: string;
    // !Propiedades solo lectura
    readonly race: string;

}
function showAnimal( animal: IAnimal ): void {
    console.log(`The animal is ${ animal.name } and it is ${ animal.age } years old`);
}
showAnimal({ name: 'Dog', age: 5, race: 'Dogo'});

// *Definir una función
interface IFunction {
    (a: number, b: number): number;
}
const add: IFunction = ( a: number, b: number ): number => a + b;

// *Interfaz en una clase
interface IHuman {
    name: string;
    age: number;
}
class Adult implements IHuman {
    name: string;
    age: number;
    hasCar: boolean;
    constructor( name: string, age: number, hasCar: boolean ) {
        this.name = name;
        this.age = age;
        this.hasCar = hasCar;
    }
}