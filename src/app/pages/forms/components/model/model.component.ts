import { Component } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {

  public myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      surname: new FormControl('', [ Validators.required ]),
      age: new FormControl('', [ Validators.required ]),
      dni: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      pass: new FormControl('', [ Validators.required ]),
      repeatePass: new FormControl('', [ Validators.required ])
    });
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
