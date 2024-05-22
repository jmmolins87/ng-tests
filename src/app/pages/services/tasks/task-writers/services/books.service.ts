import { Injectable } from '@angular/core';

import { Libro } from '../models/libro.model';

import { LIBROS } from '../db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getByWriter(id): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      const arrFilter = LIBROS.filter(libro => {
        return libro.id === id;
      });

      resolve( arrFilter );
    })
  }
}
