import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritersTasksRoutingModule } from './writers-tasks-routing.module';

import { PlaygroundWritersComponent } from './playground-writers.component';
import { ListWritersComponent } from './components/list-writers/list-writers.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { WriterDetailComponent } from './components/writer-detail/writer-detail.component';


@NgModule({
  declarations: [
    PlaygroundWritersComponent,
    ListWritersComponent,
    ListBooksComponent,
    WriterDetailComponent
  ],
  imports: [
    CommonModule,
    WritersTasksRoutingModule
  ]
})
export class WritersTasksModule { }
