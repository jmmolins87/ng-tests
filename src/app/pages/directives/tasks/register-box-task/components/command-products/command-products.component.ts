import { Component, Input } from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-command-products',
  templateUrl: './command-products.component.html',
  styleUrls: ['./command-products.component.css']
})
export class CommandProductsComponent {

  @Input()
  public commandProducts: Product[] = [];

  calculateTotal() {
    let result: number = 0;
    for( let product of this.commandProducts ) {
      result += (product.price * product.quantity);
    }
    return result;
  }

  deleteAllProducts(index: number) {
    this.commandProducts.splice(index, 1);
  }

  deleteUnitProducts(index: number) {
    if( this.commandProducts[index].quantity === 1 ) {
      this.commandProducts.splice(index, 1);
    } else {
      this.commandProducts[index].quantity--;
    }
  }

}
