import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-http',
  templateUrl: './playground-http.component.html',
  styleUrls: ['./playground-http.component.css']
})
export class PlaygroundHttpComponent {

  public itemTabsHttp: ItemsTabs[] = [];

  constructor( private _httpService: PagesService ) {
    this.itemTabsHttp = this._httpService.itemsTabsHttp;
  }

}
