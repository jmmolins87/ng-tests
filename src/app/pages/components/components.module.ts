import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';

import { PlaygroundComponentsComponent } from './playground-components.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { FatherComponent } from './components/father/father.component';
import { SonOneComponent } from './components/son-one/son-one.component';


@NgModule({
  declarations: [
    PlaygroundComponentsComponent,
    GreetingComponent,
    FatherComponent,
    SonOneComponent
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
