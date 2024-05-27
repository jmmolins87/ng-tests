import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-pipes',
  templateUrl: './playground-pipes.component.html',
  styleUrls: ['./playground-pipes.component.css']
})
export class PlaygroundPipesComponent {

  public itemsTabsPipes: ItemsTabs[] = [];

  constructor( private _httpService: PagesService ) {
    this.itemsTabsPipes = this._httpService.itemsTabsPipes;
  }

}
