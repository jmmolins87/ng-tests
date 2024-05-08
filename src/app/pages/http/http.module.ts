import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { PlaygroundHttpComponent } from './playground-http.component';


@NgModule({
  declarations: [
    PlaygroundHttpComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule
  ]
})
export class HttpModule { }
