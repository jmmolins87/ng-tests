import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';


@Component({
  selector: 'app-playground-components',
  templateUrl: './playground-components.component.html',
  styleUrls: ['./playground-components.component.css']
})
export class PlaygroundComponentsComponent {

  public itemsTabsComponents: ItemsTabs[];

  constructor( private _componentsService: PagesService ) {
    this.itemsTabsComponents = this._componentsService.itemsTabsComponents;
  }
}
