import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { PlaygroundMapsComponent } from './playground-maps.component';


@NgModule({
  declarations: [
    PlaygroundMapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
