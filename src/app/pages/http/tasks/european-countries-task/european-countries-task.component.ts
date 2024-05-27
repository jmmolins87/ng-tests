import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-european-countries-task',
  templateUrl: './european-countries-task.component.html',
  styleUrls: ['./european-countries-task.component.css']
})
export class EuropeanCountriesTaskComponent implements OnInit {

  public countries: any[];

  constructor( private _countriesService: CountriesService ) {}

  async ngOnInit() {
    this.countries = await this._countriesService.countries;
  }

}
