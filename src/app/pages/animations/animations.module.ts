import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { PlaygroundAnimationsComponent } from './playground-animations.component';


@NgModule({
  declarations: [
    PlaygroundAnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }
