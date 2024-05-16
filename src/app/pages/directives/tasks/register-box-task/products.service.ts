import { Injectable } from '@angular/core';

import { ProductsFoods, ProductsDrinks } from './db/list-products.db';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  get foods() {
    return ProductsFoods
  }

  get drinks() {
    return ProductsDrinks
  }
}
