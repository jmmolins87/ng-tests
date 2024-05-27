import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public basicUrl: string = 'https://restcountries.com/v3.1/all';

  constructor( private _http: HttpClient) { }

  get countries() {
    return this._http.get<any[]>(`${ this.basicUrl }`).toPromise();
  }
}
