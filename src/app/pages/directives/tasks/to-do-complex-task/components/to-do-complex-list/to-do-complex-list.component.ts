import { Component, Input } from '@angular/core';

import { Task } from '../../model/task.model';

@Component({
  selector: 'app-to-do-complex-list',
  templateUrl: './to-do-complex-list.component.html',
  styleUrls: ['./to-do-complex-list.component.css']
})
export class ToDoComplexListComponent {

  @Input()
  public tasks: Task[] = [];

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completedTask(i: number) {
    this.tasks[i].isCompleted = !this.tasks[i].isCompleted;
  }

}
