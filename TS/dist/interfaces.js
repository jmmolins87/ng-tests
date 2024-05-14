function showAnimal(animal) {
    console.log(`The animal is ${animal.name} and it is ${animal.age} years old`);
}
showAnimal({ name: 'Dog', age: 5, race: 'Dogo' });
const add = (a, b) => a + b;
class Adult {
    constructor(name, age, hasCar) {
        this.name = name;
        this.age = age;
        this.hasCar = hasCar;
    }
}
