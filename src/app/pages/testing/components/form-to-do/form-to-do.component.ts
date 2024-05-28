import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ToDo } from '../../interfaces/toDo.interface';

@Component({
  selector: 'app-form-to-do',
  templateUrl: './form-to-do.component.html',
  styleUrls: ['./form-to-do.component.css']
})
export class FormToDoComponent {

  public title: string = 'Formulario'
  public myForm: FormGroup;

  @Output()
  public toDoCreated: EventEmitter<ToDo>;

  constructor() {
    this.toDoCreated = new EventEmitter();
    this.myForm = new FormGroup({
      author: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  onSubmit() { 
    this.toDoCreated.emit(this.myForm.value);
    console.log(this.myForm.value)
  }

}
