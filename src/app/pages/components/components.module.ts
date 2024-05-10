import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';

import { PlaygroundComponentsComponent } from './playground-components.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { FatherComponent } from './components/father/father.component';
import { SonOneComponent } from './components/son-one/son-one.component';
import { SonTwoComponent } from './components/son-two/son-two.component';
import { EventsComponent } from './components/events/events.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ChronometerTaskComponent } from './tasks/chronometer-task/chronometer-task.component';
import { CalculatorTaskComponent } from './tasks/calculator-task/calculator-task.component';
import { AlertComponent } from './components/alert/alert.component';
import { AddWithInputComponent } from './tasks/add-with-input/add-with-input.component';


@NgModule({
  declarations: [
    PlaygroundComponentsComponent,
    GreetingComponent,
    FatherComponent,
    SonOneComponent,
    SonTwoComponent,
    EventsComponent,
    AddTaskComponent,
    ChronometerTaskComponent,
    CalculatorTaskComponent,
    AlertComponent,
    AddWithInputComponent,
    AddTaskComponent
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
