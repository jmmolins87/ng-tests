import { Component } from '@angular/core';

import { PeopleServiceService } from '../../service/people-service.service';

import { Person } from '../../model/person.model';

@Component({
  selector: 'app-service-with-promise',
  templateUrl: './service-with-promise.component.html',
  styleUrls: ['./service-with-promise.component.css']
})
export class ServiceWithPromiseComponent {

  public listPeople: Person[];
  public isActive: boolean = false;

  constructor( private _peopleService: PeopleServiceService ) {
    this.listPeople = this._peopleService.allPeople;
  }

  async activePeople() {
    try {
      this.listPeople = await this._peopleService.active()
    } catch (error) {
      console.log(error);
    }
  }

}
