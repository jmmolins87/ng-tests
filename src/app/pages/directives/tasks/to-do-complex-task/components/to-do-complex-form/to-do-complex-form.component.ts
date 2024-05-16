import { 
  Component, 
  EventEmitter, 
  Output 
} from '@angular/core';

import { Task } from '../../model/task.model';

@Component({
  selector: 'app-to-do-complex-form',
  templateUrl: './to-do-complex-form.component.html',
  styleUrls: ['./to-do-complex-form.component.css']
})
export class ToDoComplexFormComponent {

  public task: Task;

  @Output()
  public createTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {
    this.task = new Task('', '', false ); // Pass empty strings as arguments to the Task constructor.
  }

  addTask() {
    this.createTask.emit(this.task);
    if( this.task.title === '' || this.task.description === '') return; // Prevent empty tasks from being added to the list.
    this.task = new Task('', '', false ); // Reset the form.
  }

}

