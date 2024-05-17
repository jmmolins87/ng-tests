import { Component } from '@angular/core';

import { Product } from './model/product.model';

@Component({
  selector: 'app-playground-list-shop-task',
  templateUrl: './playground-list-shop-task.component.html',
  styleUrls: ['./playground-list-shop-task.component.css']
})
export class PlaygroundListShopTaskComponent {

  public selectedProduct: Product[] = [];
  public purchasedProducts: Product[] = [];

  public slectedProducts: string = 'No tiene productos seleccionados'
  public shopProducts: string = 'No tiene productos en la cesta de la compra'
  public titleListSelected: string = 'Lista de productos seleccionados'
  public titleListShopping: string = 'Lista de productos en la cesta'

  collectProductsSelected($event: Product) {
    this.selectedProduct.push($event);
  }

  selectedProductToBuy($event: number) {
    const prod = this.selectedProduct.splice($event, 1)
    this.purchasedProducts.push(prod[0]);
  }

  noSelectedProduct($event: number) {
    const prod = this.purchasedProducts.splice($event, 1)
    this.selectedProduct.push(prod[0]);
  }

}
