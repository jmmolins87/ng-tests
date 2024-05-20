import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterNavigateRoutingModule } from './router-navigate-routing.module';
import { RouterNavigateComponent } from './router-navigate.component';


@NgModule({
  declarations: [
    RouterNavigateComponent
  ],
  imports: [
    CommonModule,
    RouterNavigateRoutingModule
  ]
})
export class RouterNavigateModule { }
