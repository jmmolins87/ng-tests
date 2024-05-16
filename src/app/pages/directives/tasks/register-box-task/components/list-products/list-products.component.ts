import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  @Input()
  public title: string = '';
  @Input()
  public products: Product[] = [];

  @Output() 
  public productSelected: EventEmitter<Product> = new EventEmitter<Product>();

  addProduct(product: Product) {
    this.productSelected.emit(product);
  }

}
