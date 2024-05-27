import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-animations',
  templateUrl: './playground-animations.component.html',
  styleUrls: ['./playground-animations.component.css']
})
export class PlaygroundAnimationsComponent {

  public itemsTabsAnimations: ItemsTabs[];

  constructor( private _animationsService: PagesService ) {
    this.itemsTabsAnimations = this._animationsService.itemsTabsAnimations;
  }

}
