import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './components/template/template.component';
import { ModelComponent } from './components/model/model.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
