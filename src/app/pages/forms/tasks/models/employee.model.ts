

export class Employee {
    name: string;
    lastNames: string;
    email: string;
    age: number;
    department: string;
    pass: string;
    img: string;

    constructor( cName: string, lastNames: string, cEmail: string, cAge: number, cDepartment: string, cPass: string, cImg: string ) {
        this.name = cName;
        this.lastNames = lastNames;
        this.email = cEmail;
        this.age = cAge;
        this.department = cDepartment;
        this.pass = cPass;
        this.img = cImg;
    }
}