import { Injectable } from '@angular/core';

import { itemsTabsComponents } from './components/db/itemsTabsComponents.db';
import { itemsTabsDirectives } from './directives/db/itemsTabsDirectives.db';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  get itemsTabsComponents() {
    return itemsTabsComponents;
  }

  get itemsTabsDirectives() {
    return itemsTabsDirectives;
  }
}
