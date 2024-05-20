import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeId!: number;

  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.employeeId = params['id'];
      console.log(params['id']);
    })
  }

}
