import { 
  Component, 
  EventEmitter, 
  Output 
} from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-list-shop-form',
  templateUrl: './list-shop-form.component.html',
  styleUrls: ['./list-shop-form.component.css']
})
export class ListShopFormComponent {

  public product: Product = new Product();

  @Output()
  public createProduct: EventEmitter<Product> = new EventEmitter<Product>();

  sendProduct() {
    this.createProduct.emit(this.product);
    this.product = new Product();
  }

}
