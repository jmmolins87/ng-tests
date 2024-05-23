import { Injectable } from '@angular/core';

import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees: Employee[] = [];

  constructor() { }

  getallEmployees(): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      resolve(this.employees)
    });
  }

  insertEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
