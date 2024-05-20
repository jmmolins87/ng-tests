import { Component } from '@angular/core';

import { ItemsTabs } from './components/interface/nav-tabs.interface';

@Component({
  selector: 'app-basic-routes',
  templateUrl: './basic-routes.component.html',
  styleUrls: ['./basic-routes.component.css']
})
export class BasicRoutesComponent {

  public itemsTabs: ItemsTabs[] = [
    {
      name: 'Info',
      path: 'info'
    },
    {
      name: 'About',
      path: 'about'
    },
    {
      name: 'Contact',
      path: 'contact'
    }
  ]

}
