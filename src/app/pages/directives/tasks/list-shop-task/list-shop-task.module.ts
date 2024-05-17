import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaygroundListShopTaskComponent } from './playground-list-shop-task.component';
import { ListShopFormComponent } from './components/list-shop-form/list-shop-form.component';
import { ListShopListerComponent } from './components/list-shop-lister/list-shop-lister.component';



@NgModule({
  declarations: [
    PlaygroundListShopTaskComponent,
    ListShopFormComponent,
    ListShopListerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListShopTaskModule { }
