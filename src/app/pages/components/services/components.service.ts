import { Injectable } from '@angular/core';


import { itemsTabs } from '../db/itemsTabs.db';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  get itemsTabs() {
    return itemsTabs;
  }
}
