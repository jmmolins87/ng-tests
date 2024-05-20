import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundRoutingComponent } from './playground-routing.component';
import { RouterGuardComponent } from './components/router-guard/router-guard.component';


@NgModule({
  declarations: [
    PlaygroundRoutingComponent,
    RouterGuardComponent,
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
