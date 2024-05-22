import { Injectable } from '@angular/core';

import { ESCRITORES } from '../db/escritores.db';

import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  get lsitWriters(): Escritor[] {
    return ESCRITORES;
  }

  getListWritersPromise(): Promise<Escritor[]> {
    return new Promise(( resolve, reject ) => {
      resolve( ESCRITORES );
    })
  }

  getbyCountry( cPais: string ): Promise<Escritor[]> {
    return new Promise( (resolve, reject) => {
      const escritores = ESCRITORES.filter( escritor => {
        return escritor.pais === cPais;
      })
      resolve( escritores );
    });
  }

  getById(id): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritor = ESCRITORES.find( escritor => {
        return escritor.id === id;
      });
      resolve( escritor );
    });
  }
  
}
