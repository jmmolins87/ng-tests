import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeId!: number;

  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.employeeId = params['id'];
      console.log(params['id']);
    })
  }

}
