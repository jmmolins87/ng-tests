import { Injectable } from '@angular/core';

import { itemsNavbar } from './../db/itemsNavbar.db'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  get itemsNavbar() {
    return itemsNavbar
  }
}
