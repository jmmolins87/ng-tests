import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { PlaygroundRoutingComponent } from './playground-routing.component';


@NgModule({
  declarations: [
    PlaygroundRoutingComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
