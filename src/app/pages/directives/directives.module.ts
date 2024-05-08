import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { PlaygroundDirectivesComponent } from './playground-directives.component';


@NgModule({
  declarations: [
    PlaygroundDirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
