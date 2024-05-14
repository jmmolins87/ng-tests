import { Component } from '@angular/core';

import { NgForService } from './services/ng-for.service';

import { Person } from './interface/person.interface';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  public people: Person[] = []

  constructor( private ngForService: NgForService ) {
    this.people = this.ngForService.people;
  }

  addPerson() {
    this.people.push({ 
      name: 'Julio', 
      surname: 'Doe', 
      age: 45 
    });
  }

}
