import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRegisterBoxTaskComponent } from './playground-register-box-task.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CommandProductsComponent } from './components/command-products/command-products.component';



@NgModule({
  declarations: [
    PlaygroundRegisterBoxTaskComponent,
    ListProductsComponent,
    CommandProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterBoxTaskModule { }
