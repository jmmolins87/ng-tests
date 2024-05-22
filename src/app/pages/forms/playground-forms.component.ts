import { Component } from '@angular/core';

import { PagesService } from '../pages.service';

import { ItemsTabs } from './../../shared/interfaces/tabsItems.interface';

@Component({
  selector: 'app-playground-forms',
  templateUrl: './playground-forms.component.html',
  styleUrls: ['./playground-forms.component.css']
})
export class PlaygroundFormsComponent {

  public itemTabsForms: ItemsTabs[];

  constructor( private _formService: PagesService ) {
    this.itemTabsForms = this._formService.itemsTabsForm;
  }

}
