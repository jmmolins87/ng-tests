import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListWritersComponent } from './components/list-writers/list-writers.component';
import { WritersDetailComponent } from './components/writers-detail/writers-detail.component';
import { ListBooksComponent } from './components/list-books/list-books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-writers',
    pathMatch: 'full'
  },
  {
    path: 'list-writers',
    component: ListWritersComponent
  },
  {
    path: 'list-writers/:id',
    component: WritersDetailComponent,
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
export class TaskWritersRoutingModule { }
