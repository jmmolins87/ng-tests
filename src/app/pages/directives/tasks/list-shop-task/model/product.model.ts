

export class Product {
    name: string;
    quantity: number;
    department: string;

    constructor( cName: string = '', cQuantity: number = 0, cDepartment: string = '' ) {
        this.name = cName;
        this.quantity = cQuantity;
        this.department = cDepartment;
    }
}