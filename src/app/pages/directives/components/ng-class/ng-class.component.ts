import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public classesArray: string[] = ['light-traffic'];
  public colorSelected: string;

  constructor() {
    this.classesArray.push('red', 'circle');
    this.colorSelected = 'g';
  }

  ngOnInit() {
    setInterval(() => {
      if( this.colorSelected === 'g' ) {
        this.colorSelected = 'r';
      } else if( this.colorSelected === 'r' ) {
        this.colorSelected = 'y';
      } else if( this.colorSelected === 'y' ) {
        this.colorSelected = 'g';
      }
    }, 500)
  }

}
