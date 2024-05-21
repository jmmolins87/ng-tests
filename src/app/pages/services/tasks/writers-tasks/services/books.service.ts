import { Injectable } from '@angular/core';

import { LIBROS } from '../db/libros.db';

import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getByWriter( id: number ): Promise<Libro[]> {
    return new Promise( (resolve, reject) => {
      const arrFilter = LIBROS.filter( libro => {
        return libro.escritor === id;
      })
      resolve( arrFilter );
    });
  }
}
