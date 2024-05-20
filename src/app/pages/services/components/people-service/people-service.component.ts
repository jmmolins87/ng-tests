import { Component } from '@angular/core';

import { PeopleServiceService } from '../../service/people-service.service';

import { Person } from '../../model/person.model';


@Component({
  selector: 'app-people-service',
  templateUrl: './people-service.component.html',
  styleUrls: ['./people-service.component.css']
})
export class PeopleServiceComponent {

  public people: Person[];

  constructor( private _personService: PeopleServiceService ) {
    this.people = this._personService.allPeople;
  }

}
