import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutesRoutingModule } from './dynamic-routes-routing.module';
import { DynamicRouteComponent } from './dynamic-route.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


@NgModule({
  declarations: [
    DynamicRouteComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutesRoutingModule
  ]
})
export class DynamicRoutesModule { }
