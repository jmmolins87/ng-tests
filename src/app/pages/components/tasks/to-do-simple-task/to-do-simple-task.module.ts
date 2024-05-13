import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { PlaygroundToDoSimpleTaskComponent } from './playground-to-do-simple-task.component';
import { ToDoSimpleFormComponent } from './components/to-do-simple-form/to-do-simple-form.component';
import { ToDoSimpleListComponent } from './components/to-do-simple-list/to-do-simple-list.component';



@NgModule({
  declarations: [
    PlaygroundToDoSimpleTaskComponent,
    ToDoSimpleFormComponent,
    ToDoSimpleListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlaygroundToDoSimpleTaskComponent
  ]
})
export class ToDoSimpleTaskModule { }
