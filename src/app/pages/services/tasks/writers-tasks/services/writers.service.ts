import { Injectable } from '@angular/core';

import { ESCRITORES } from '../db/escritores.db';

import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  get writers(): Escritor[] {
    return ESCRITORES;
  }

  get writersPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getselectByCountry(cPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = ESCRITORES.filter( escritor => {
        return escritor.pais === cPais;
      })
      resolve(arrFiltrado);
    });
  }

}
