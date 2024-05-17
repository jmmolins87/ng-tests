import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-routing',
  templateUrl: './playground-routing.component.html',
  styleUrls: ['./playground-routing.component.css']
})
export class PlaygroundRoutingComponent {

  public itemsTabsRouting: ItemsTabs[];

  constructor( private _routingService: PagesService ) {
    this.itemsTabsRouting = this._routingService.itemsTabsRouting;
  }

}
