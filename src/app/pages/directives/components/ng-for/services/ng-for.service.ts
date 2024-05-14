import { Injectable } from '@angular/core';

import { people } from '../db/people.db';

@Injectable({
  providedIn: 'root'
})
export class NgForService {

  constructor() { }

  get people() {
    return people
  }
}
