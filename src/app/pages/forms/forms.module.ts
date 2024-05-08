import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { PlaygroundFormsComponent } from './playground-forms.component';


@NgModule({
  declarations: [
    PlaygroundFormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
