import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from './logger.service';

import { ToDo } from '../interfaces/toDo.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public toDoS: ToDo[];
  public autoIncrementId: number;
  public baseUrl: string;

  constructor( 
    private _logger: LoggerService, 
    // private _http: HttpClient 
  ) {
    this.toDoS = [];
    this.autoIncrementId = 1;
    this.baseUrl = 'http://localhost:3000/api/all';
  }

  // getAll() {
  //   return this._http.get<ToDo[]>(`${this.baseUrl}/all`);
  // }

  // getById( id: number ) {
  //   return this._http.get<ToDo>(`${this.baseUrl}/${id}`);
  // }

  addNew( newToDo: ToDo ) {
    this._logger.log('Agregamos una nueva tarea');
    newToDo.id = this.autoIncrementId++;
    this.toDoS.push( newToDo );
  }

  delete( id: number ) {
    const index = this.toDoS.findIndex( toDo => toDo.id === id );
    this.toDoS.splice( index, 1 );
  }
}
