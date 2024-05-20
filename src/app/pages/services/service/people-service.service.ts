import { Injectable } from '@angular/core';

import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  public person: Person[];

  constructor() {
    this.person = [
      new Person('John', 'Doe', 30, true),
      new Person('Jane', 'Doe', 25, true),
      new Person('Jim', 'Doe', 40, false),
      new Person('Jill', 'Doe', 35, true),
      new Person('Jack', 'Doe', 45, false)
    ]
  }

  get allPeople() {
    return this.person;
  }
}
