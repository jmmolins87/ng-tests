


export class Person {
    name: string;
    surname: string;
    age: number;
    isActive: boolean;

    constructor( cName: string, cSurname: string, cAge: number, cIsActive: boolean ) {
        this.name = cName;
        this.surname = cSurname;
        this.age = cAge;
        this.isActive = cIsActive;
    }
}