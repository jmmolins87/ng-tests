import { Component } from '@angular/core';

import { Task } from './model/task.model';


@Component({
  selector: 'app-playground-to-do-simple-task',
  templateUrl: './playground-to-do-simple-task.component.html',
  styleUrls: ['./playground-to-do-simple-task.component.css']
})
export class PlaygroundToDoSimpleTaskComponent {

  public tasks: Task[] = [];

  onCreatedTask($event: Task) {
    this.tasks.push($event);
    console.log($event);
  }

}
