import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundAnimationsComponent } from './playground-animations.component';
import { AnimationsComponent } from './components/animations/animations.component';


@NgModule({
  declarations: [
    PlaygroundAnimationsComponent,
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundAnimationsComponent
  ]
})
export class AnimationsModule { }
