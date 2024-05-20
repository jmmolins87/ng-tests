import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee/1',
    pathMatch: 'full'
  },
  {
    path: 'employee/:id',
    component: EmployeeComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'cv',
        component: CurriculumComponent
      },
    ]
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
export class ChildrenRouteRoutingModule { }
