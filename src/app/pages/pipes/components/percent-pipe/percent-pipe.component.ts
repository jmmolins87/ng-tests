import { Component } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.css']
})
export class PercentPipeComponent {

  public altNumber: number;

  constructor() {
    this.altNumber = Math.random();
  }

}
