import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundHttpComponent } from './playground-http.component';


@NgModule({
  declarations: [
    PlaygroundHttpComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundHttpComponent
  ]
})
export class HttpModule { }
