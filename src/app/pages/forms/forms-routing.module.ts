import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './components/template/template.component';
import { ModelComponent } from './components/model/model.component';
import { PlaygroundTaskEmployeesComponent } from './tasks/playground-task-employees.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    pathMatch: 'full'
  },
  {
    path: 'template',
    component: TemplateComponent
  },
  {
    path: 'model',
    component: ModelComponent
  },
  {
    path: 'taskEmployees',
    component: PlaygroundTaskEmployeesComponent,
    loadChildren: () => import('./tasks/task-employees.module').then( m => m.TaskEmployeesModule )
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
export class FormsRoutingModule { }
