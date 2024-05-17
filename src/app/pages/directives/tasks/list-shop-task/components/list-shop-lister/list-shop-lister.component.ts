import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-list-shop-lister',
  templateUrl: './list-shop-lister.component.html',
  styleUrls: ['./list-shop-lister.component.css']
})
export class ListShopListerComponent {

  @Input()
  public products: Product[] = [];
  @Input()
  public textAlert!: string;
  @Input()
  public titleList!: string;
  @Input()
  public textButton!: string;

  @Output()
  selectedProduct: EventEmitter<number> = new EventEmitter<number>();

  buyProduct(index: number) {
    this.selectedProduct.emit(index);
  }

}
