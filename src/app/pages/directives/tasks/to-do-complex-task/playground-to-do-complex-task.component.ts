import { Component } from '@angular/core';

import { Task } from './model/task.model';

@Component({
  selector: 'app-playground-to-do-complex-task',
  templateUrl: './playground-to-do-complex-task.component.html',
  styleUrls: ['./playground-to-do-complex-task.component.css']
})
export class PlaygroundToDoComplexTaskComponent {

  public tasks: Task[] = [];

  onCreatedTask($event: Task) {
    this.tasks.push($event);
  }

}
