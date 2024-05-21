import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListWritersComponent } from './components/list-writers/list-writers.component';
import { WriterDetailComponent } from './components/writer-detail/writer-detail.component';
import { ListBooksComponent } from './components/list-books/list-books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listWriters',
    pathMatch: 'full'
  },
  {
    path: 'listWriters',
    component: ListWritersComponent
  },
  {
    path: 'listWriters/:id',
    component: WriterDetailComponent,
    children: [
      {
        path: 'books',
        component: ListBooksComponent
      }
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
export class WritersTasksRoutingModule { }
