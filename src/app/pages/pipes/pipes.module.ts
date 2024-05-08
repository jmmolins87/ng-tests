import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PlaygroundPipesComponent } from './playground-pipes.component';


@NgModule({
  declarations: [
    PlaygroundPipesComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
