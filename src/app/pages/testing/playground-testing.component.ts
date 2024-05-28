import { Component, Input } from '@angular/core';

import { ToDo } from './interfaces/toDo.interface';

@Component({
  selector: 'app-playground-testing',
  templateUrl: './playground-testing.component.html',
  styleUrls: ['./playground-testing.component.css']
})
export class PlaygroundTestingComponent {

  public toDoList: ToDo[];

  @Input()
  public title: string = '';

  constructor() {
    this.toDoList = [];
  }

  onToDoCreated(event) {
    this.toDoList.push(event);
    console.log(this.toDoList)
  }

}
