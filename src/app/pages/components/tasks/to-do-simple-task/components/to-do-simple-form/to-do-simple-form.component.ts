import { Component, EventEmitter, Output } from '@angular/core';

import { Task } from './../../model/task.model';


@Component({
  selector: 'app-to-do-simple-form',
  templateUrl: './to-do-simple-form.component.html',
  styleUrls: ['./to-do-simple-form.component.css']
})
export class ToDoSimpleFormComponent {

  public task: Task;

  @Output()
  public createTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {
    this.task = new Task('', ''); // Pass empty strings as arguments to the Task constructor.
  }

  addTask() {
    this.createTask.emit(this.task);
    this.task = new Task('', ''); // Reset the form.
  }

}

