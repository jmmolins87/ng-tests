import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskEmployeesRoutingModule } from './task-employees-routing.module';

import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';


@NgModule({
  declarations: [
    FormEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskEmployeesRoutingModule
  ]
})
export class TaskEmployeesModule { }
