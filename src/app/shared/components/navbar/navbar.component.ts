import { Component } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { ItemsNavbar } from '../../interfaces/navbarItems.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public itemsNavbar: ItemsNavbar[];

  constructor( private _sharedService: SharedService ) {
    this.itemsNavbar = this._sharedService.itemsNavbar;
  }



}
