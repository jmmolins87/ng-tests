import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ToDoComplexComponent } from './tasks/to-do-complex/to-do-complex.component';

const routes: Routes = [
  {
    path: 'ngStyle',
    component: NgStyleComponent
  },
  {
    path: 'ngClass',
    component: NgClassComponent
  },
  {
    path: 'ngIf',
    component: NgIfComponent
  },
  {
    path: 'ngFor',
    component: NgForComponent
  },
  {
    path: 'ngSwitch',
    component: NgSwitchComponent
  },
  {
    path: 'toDoComplexTask',
    component: ToDoComplexComponent
  },
  {
    path: '',
    redirectTo: 'ngStyle',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
