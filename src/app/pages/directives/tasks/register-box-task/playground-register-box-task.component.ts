import { Component } from '@angular/core';

import { Product } from './model/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-playground-register-box-task',
  templateUrl: './playground-register-box-task.component.html',
  styleUrls: ['./playground-register-box-task.component.css']
})
export class PlaygroundRegisterBoxTaskComponent {

  public titleEatSector: string = 'Comida';
  public titleDrinkSector: string = 'Bebida';
  public arrFoods: Product[] = [];
  public arrDrinks: Product[] = [];
  public selectedProducts: Product[] = [];

  constructor( private productService: ProductsService ) {
    this.arrFoods = this.productService.foods;
    this.arrDrinks = this.productService.drinks;
  }

  addProduct(product: Product) {
    const productFound = this.selectedProducts.find(( prod: Product ) => prod.name === product.name );
    if( productFound ) {
      productFound.quantity++;
    } else {
      product.quantity = 1;
      this.selectedProducts.push(product);
    }
  }

}
