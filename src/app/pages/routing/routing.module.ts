import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundRoutingComponent } from './playground-routing.component';


@NgModule({
  declarations: [
    PlaygroundRoutingComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundRoutingComponent
  ]
})
export class RoutingModule { }
