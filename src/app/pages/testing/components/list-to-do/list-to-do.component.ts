import { Component, Input } from '@angular/core';

import { ToDo } from '../../interfaces/toDo.interface';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent {

  public title: string = 'Lista de tareas';

  @Input()
  public toDoS: ToDo[];

}
