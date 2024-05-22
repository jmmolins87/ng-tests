import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskWritersRoutingModule } from './task-writers-routing.module';

import { PlaygroundTaskWritersComponent } from './playground-task-writers.component';
import { ListWritersComponent } from './components/list-writers/list-writers.component';
import { WritersDetailComponent } from './components/writers-detail/writers-detail.component';
import { ListBooksComponent } from './components/list-books/list-books.component';


@NgModule({
  declarations: [
    PlaygroundTaskWritersComponent,
    ListWritersComponent,
    WritersDetailComponent,
    ListBooksComponent
  ],
  imports: [
    CommonModule,
    TaskWritersRoutingModule
  ],
  exports: [
    PlaygroundTaskWritersComponent
  ]
})
export class TaskWritersModule { }
