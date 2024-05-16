import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ToDoComplexTaskModule } from './tasks/to-do-complex-task/to-do-complex-task.module';
import { RegisterBoxTaskModule } from './tasks/register-box-task/register-box-task.module';

import { PlaygroundDirectivesComponent } from './playground-directives.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    PlaygroundDirectivesComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesRoutingModule,
    SharedModule,
    ToDoComplexTaskModule,
    RegisterBoxTaskModule
  ],
  exports: [
    PlaygroundDirectivesComponent
  ]
})
export class DirectivesModule { }
