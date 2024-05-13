import { Component, Input } from '@angular/core';

import { ItemsTabs } from '../../interfaces/tabsItems.interface';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent {

  @Input()
  public itemsTabs: ItemsTabs[] = [];

  constructor() { }

}
