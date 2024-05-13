import { Injectable } from '@angular/core';

import { itemsTabsComponents } from './components/db/itemsTabs.db';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  get itemsTabsComponents() {
    return itemsTabsComponents;
  }
}
