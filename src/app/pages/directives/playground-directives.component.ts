import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';


@Component({
  selector: 'app-playground-directives',
  templateUrl: './playground-directives.component.html',
  styleUrls: ['./playground-directives.component.css']
})
export class PlaygroundDirectivesComponent {

  public itemsTabsDirectives: ItemsTabs[];

  constructor( private _directivesService: PagesService ) {
    this.itemsTabsDirectives = this._directivesService.itemsTabsDirectives;
  }

}
