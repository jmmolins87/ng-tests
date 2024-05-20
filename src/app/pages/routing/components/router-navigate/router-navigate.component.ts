import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-navigate',
  templateUrl: './router-navigate.component.html',
  styleUrls: ['./router-navigate.component.css']
})
export class RouterNavigateComponent {

  constructor( private _route: Router ) {}

  goToHome() {
    this._route.navigate(['/']);
  }

}
