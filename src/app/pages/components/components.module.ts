import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';

import { PlaygroundComponentsComponent } from './playground-components.component';
import { GreetingComponent } from './components/greeting/greeting.component';


@NgModule({
  declarations: [
    PlaygroundComponentsComponent,
    GreetingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    PlaygroundComponentsComponent
  ]

})
export class ComponentsModule { }
