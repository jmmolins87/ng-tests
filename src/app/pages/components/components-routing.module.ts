import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path:  'greeting',
    component: GreetingComponent
  },
  {
    path: 'father',
    component: FatherComponent
  },
  {
    path: 'sonOne',
    component: SonOneComponent
  },
  {
    path: 'sonTwo',
    component: SonTwoComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'addTask',
    component: AddTaskComponent
  },
  {
    path: 'chronometerTask',
    component: ChronometerTaskComponent
  },
  {
    path: 'calculatorTask',
    component: CalculatorTaskComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'addTaskWithInput',
    component: AddWithInputComponent
  },
  {
    path: '',
    redirectTo: 'greeting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
