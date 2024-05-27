import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private _http: HttpClient ) { }

  getAll(): Promise<any[]> {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
