import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-maps',
  templateUrl: './playground-maps.component.html',
  styleUrls: ['./playground-maps.component.css']
})
export class PlaygroundMapsComponent {

  public itemTabsMaps: ItemsTabs[];

  constructor( private _mapsService: PagesService ) {
    this.itemTabsMaps = this._mapsService.itemsTabsMaps
  }

}
