import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundDirectivesComponent } from './playground-directives.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ToDoComplexTaskComponent } from './tasks/to-do-complex-task/to-do-complex-task.component';
import { RegisterBoxTaskComponent } from './tasks/register-box-task/register-box-task.component';


@NgModule({
  declarations: [
    PlaygroundDirectivesComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    ToDoComplexTaskComponent,
    RegisterBoxTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundDirectivesComponent
  ]
})
export class DirectivesModule { }
