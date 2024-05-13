import { Component, Input } from '@angular/core';

import { Task } from '../../model/task.model';

@Component({
  selector: 'app-to-do-simple-list',
  templateUrl: './to-do-simple-list.component.html',
  styleUrls: ['./to-do-simple-list.component.css']
})
export class ToDoSimpleListComponent {

  @Input()
  public tasks: Task[] = [];

}
