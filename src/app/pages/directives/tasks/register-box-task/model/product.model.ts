


export class Product {
    name: string;
    imgUrl: string;
    price: number;
    quantity: number

    constructor( cName: string, cImgUrl: string, cPrice: number ) {
        this.name = cName;
        this.imgUrl = cImgUrl;
        this.price = cPrice;
        this.quantity = 0;
    }
}