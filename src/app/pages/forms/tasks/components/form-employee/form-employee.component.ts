import { Component } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  Validators 
} from '@angular/forms';

import { EmployeeService } from '../../services/employee.service';

import { ItemsDepartment } from '../../interface/itemsSelectDepartment.interface';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent {

  public itemsDepartments: ItemsDepartment[] = [
    {
      name: 'Informática',
      value: 'informatica'
    },
    {
      name: 'Marketing',
      value: 'marketing'
    },
    {
      name: 'Contabilidad',
      value: 'contabilidad'
    }
  ]

  public myForm: FormGroup = new FormGroup ({
    name: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
    lastNames: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
    email: new FormControl('', [ Validators.required, Validators.pattern(/^(\D)+(\w)*((\.(\W)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/) ]),
    age: new FormControl('', [ Validators.required ]),
    department: new FormControl('', [ Validators.required ]),
    img: new FormControl('', [ Validators.required ]),
    pass: new FormControl('', [ Validators.required ]),
  });

  constructor( private _employeeService: EmployeeService ) {}

  onSubmit() {
    this._employeeService.insertEmployee(this.myForm.value);
    this.myForm.reset();
  }

}
