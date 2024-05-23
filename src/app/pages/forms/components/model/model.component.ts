import { Component, OnInit } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  public myForm: FormGroup;

  /**
   * 
   * 
   * valid -- invalid -> no cumple con las validaciones
   * pristine --dirty -> el campo aún no ha sido escrito
   * untoched -- touched -> no ha habido foco en el campo
   * 
   * 
  **/

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [ Validators.required, Validators.minLength(10)]),
      age: new FormControl('', [ Validators.required, this.ageValidator ]),
      dni: new FormControl('', [ Validators.required, this.dniValidator ]),
      // ** Validamos el email con una expresión regular **
      email: new FormControl('', [ Validators.required, Validators.pattern(/^(\D)+(\w)*((\.(\W)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/) ]),
      pass: new FormControl('', [ Validators.required ]),
      repeatePass: new FormControl('', [ Validators.required ])
    });
  }

  ngOnInit(): void {
    const emailControl = this.myForm.controls['email'];
    emailControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe( value => {
        console.log( value );
    });
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

  ageValidator( formControl: { value: any; } ) {
    const value = formControl.value;
    const max = 65;
    const min = 18;

    if( value >= min && value <= max ) {
      return null;
    } else {
      return { ageValidator: { max, min }}
    }
  } 

  dniValidator( formControl: { value: any; } ) {
    const value = formControl.value;
    const dniPattern = /^\d{8}[a-zA-Z]$/;
    const letters = 'TRWAGMYFPDXBMJZSQVHLCKET'
    
    if( dniPattern.test(value)) {
      const num = value.substring(0, value.length - 1);
      const letter = value.charAt(value.length - 1);
      const calculate = num % 23;
      const selectedLetter = letters.charAt(calculate);
      if( letter.toUpperCase() === selectedLetter ) {
        return null;
      } else {
        return { dniValidator: 'La letra no coincide con el número' }
      }
    } else {
      return { dniValidator: 'El dni no tiene el formato esperado' }
    }
  }

}
