import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaygroundToDoComplexTaskComponent } from './playground-to-do-complex-task.component';
import { ToDoComplexListComponent } from './components/to-do-complex-list/to-do-complex-list.component';
import { ToDoComplexFormComponent } from './components/to-do-complex-form/to-do-complex-form.component';



@NgModule({
  declarations: [
    PlaygroundToDoComplexTaskComponent,
    ToDoComplexListComponent,
    ToDoComplexFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ToDoComplexTaskModule { }
