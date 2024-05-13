import { Component } from '@angular/core';

import { Person } from './interface/person.interface';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  public fieldText: string = 'Hello World!!';
  public person: Person = { name: '', surname: '', age: 0 };

  changeValueInput() {
    this.fieldText = 'Hello Angular!!';
  }

}
