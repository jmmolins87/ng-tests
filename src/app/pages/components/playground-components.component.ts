import { Component } from '@angular/core';

import { ComponentsService } from './services/components.service';

import { ItemsTabs } from './interface/tabsItems.interface';

@Component({
  selector: 'app-playground-components',
  templateUrl: './playground-components.component.html',
  styleUrls: ['./playground-components.component.css']
})
export class PlaygroundComponentsComponent {

  public itemsTabs: ItemsTabs[];

  constructor( private _componentsService: ComponentsService ) {
    this.itemsTabs = this._componentsService.itemsTabs;
  }
}
