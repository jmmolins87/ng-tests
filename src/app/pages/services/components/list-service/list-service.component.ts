import { Component } from '@angular/core';

import { PeopleServiceService } from '../../service/people-service.service';

import { Person } from '../../model/person.model';


@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent {

  public listPeople: Person[];

  constructor( private _personListService: PeopleServiceService ) {
    this.listPeople = this._personListService.allPeople;
  }

  addUser() {
    this.listPeople.push(new Person('New', 'User', 25, true))
  }

}
