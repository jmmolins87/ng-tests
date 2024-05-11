import { Component } from '@angular/core';

import { ComponentsService } from '../config-tabs/services/components.service';

import { ItemsTabs } from '../config-tabs/interface/tabsItems.interface';

@Component({
  selector: 'app-playground-components',
  templateUrl: './playground-components.component.html',
  styleUrls: ['./playground-components.component.css']
})
export class PlaygroundComponentsComponent {

  public itemsTabsComponents: ItemsTabs[];

  constructor( private _componentsService: ComponentsService ) {
    this.itemsTabsComponents = this._componentsService.itemsTabs;
  }
}
