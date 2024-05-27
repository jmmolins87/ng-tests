import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  public basicUrl: string = 'https://rickandmortyapi.com/api'

  constructor( private _http: HttpClient ) { }

  getRickyMortyCharacters(page: number): Promise<any>  {
    return this._http.get<any>(`${this.basicUrl}/character?=page${page}`).toPromise();
  }
}
