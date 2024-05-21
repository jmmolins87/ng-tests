import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListWritersComponent } from './components/list-writers/list-writers.component';
import { WriterDetailComponent } from './components/writer-detail/writer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListWritersComponent
  },
  {
    path: 'listWriters/:id',
    component: WriterDetailComponent
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
export class WritersTasksRoutingModule { }
