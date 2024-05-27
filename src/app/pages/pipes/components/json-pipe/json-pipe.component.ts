import { Component } from '@angular/core';


interface Student {
  name: string;
  lastName: string;
  notes: number[];
}

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.css']
})
export class JsonPipeComponent {

  public student: Student;

  constructor() {
    this.student = {
      name: 'Juanma',
      lastName: 'Molins Cortés',
      notes: [3, 4, 7, 10]
    }
  }

}
