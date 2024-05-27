import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.css']
})
export class CurrencyPipeComponent {

  public price: number;

  constructor() {
    this.price = 187.87;
  }

}
