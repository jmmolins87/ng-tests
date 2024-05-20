import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLinkRoutingModule } from './router-link-routing.module';
import { RouterLinkComponent } from './router-link.component';


@NgModule({
  declarations: [
    RouterLinkComponent
  ],
  imports: [
    CommonModule,
    RouterLinkRoutingModule
  ]
})
export class RouterLinkModule { }
