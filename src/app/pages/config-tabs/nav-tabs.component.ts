import { Component, Input } from '@angular/core';

import { ComponentsService } from './services/components.service';

import { ItemsTabs } from './interface/tabsItems.interface';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent {

  @Input()
  public itemsTabs: ItemsTabs[];

  constructor(private _componentsService: ComponentsService) {
    this.itemsTabs = this._componentsService.itemsTabs;
  }

}
