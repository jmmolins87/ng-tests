import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-services',
  templateUrl: './playground-services.component.html',
  styleUrls: ['./playground-services.component.css']
})
export class PlaygroundServicesComponent {

  public itemsTabsServices: ItemsTabs[];

  constructor( private _servicesService: PagesService ) {
    this.itemsTabsServices = this._servicesService.itemsTabsService;
  }

}
