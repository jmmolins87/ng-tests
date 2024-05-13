import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from './../../shared/shared.module';

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
import { ChronometerOutputTaskComponent } from './tasks/chronometer-output-task/chronometer-output-task.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ToDoSimpleComponent } from './tasks/to-do-simple/to-do-simple.component';


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
    ChronometerOutputTaskComponent,
    TwoWayBindingComponent,
    ToDoSimpleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundComponentsComponent
  ]

})
export class ComponentsModule { }
