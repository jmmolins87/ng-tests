import { Component, Input } from '@angular/core';

import { ToDo } from '../../interfaces/toDo.interface';

@Component({
  selector: 'app-card-to-do',
  templateUrl: './card-to-do.component.html',
  styleUrls: ['./card-to-do.component.css']
})
export class CardToDoComponent {

  @Input()
  public toDo: ToDo;

}
