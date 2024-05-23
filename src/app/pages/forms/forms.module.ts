import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { TaskEmployeesModule } from './tasks/task-employees.module';

import { PlaygroundFormsComponent } from './playground-forms.component';
import { TemplateComponent } from './components/template/template.component';
import { ModelComponent } from './components/model/model.component';
import { PlaygroundTaskEmployeesComponent } from './tasks/playground-task-employees.component';


@NgModule({
  declarations: [
    PlaygroundFormsComponent,
    TemplateComponent,
    ModelComponent,
    PlaygroundTaskEmployeesComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TaskEmployeesModule
  ]
})
export class MyFormsModule { }
