import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public listEmployees: Employee[] = [];

  constructor( private _employeeService: EmployeeService ) {}

  ngOnInit(): void {
    this._employeeService.getallEmployees()
      .then(employees => {
        this.listEmployees = employees;
      })
  }
  

}
