import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee/1',
    pathMatch: 'full'
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'employee/1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutesRoutingModule { }
