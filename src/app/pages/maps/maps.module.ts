import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundMapsComponent } from './playground-maps.component';
import { NativeMapsComponent } from './components/native-maps/native-maps.component';
import { LibraryMapsComponent } from './components/library-maps/library-maps.component';

@NgModule({
  declarations: [
    PlaygroundMapsComponent,
    NativeMapsComponent,
    LibraryMapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundMapsComponent
  ]
})
export class MapsModule { }
