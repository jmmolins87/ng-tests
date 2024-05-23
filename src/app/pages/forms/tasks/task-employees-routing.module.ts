import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEmployeeComponent } from './components/form-employee/form-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  {
    path: '',
    component: FormEmployeeComponent,
    pathMatch: 'full'
  },
  {
    path: 'formEmployees',
    component: FormEmployeeComponent
  },
  {
    path: 'listEmployees',
    component: ListEmployeeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskEmployeesRoutingModule { }
