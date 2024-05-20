import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRouteRoutingModule } from './children-route-routing.module';

import { ProjectsComponent } from './components/projects/projects.component';
import { ChildrenRouteComponent } from './children-route.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EmployeeComponent } from './components/employee/employee.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ChildrenRouteComponent,
    CurriculumComponent,
    ExperienceComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    ChildrenRouteRoutingModule
  ]
})
export class ChildrenRouteModule { }
