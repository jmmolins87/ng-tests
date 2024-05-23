import { Injectable } from '@angular/core';

import { itemsTabsComponents } from './components/db/itemsTabsComponents.db';
import { itemsTabsDirectives } from './directives/db/itemsTabsDirectives.db';
import { itemsTabsRouting } from './routing/db/itemsTabsRouting.db';
import { itemsTabsServices } from './services/db/itemsTabsServices.db';
import { itemsTabsForms } from './forms/db/itemsTabsForms.db';
import { itemsTabsHttp } from './http/db/itemsTabsHttp.db';

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

  get itemsTabsRouting() {
    return itemsTabsRouting;
  }

  get itemsTabsService() {
    return itemsTabsServices;
  }

  get itemsTabsForm() {
    return itemsTabsForms;
  }

  get itemsTabsHttp() {
    return itemsTabsHttp;
  }

}
