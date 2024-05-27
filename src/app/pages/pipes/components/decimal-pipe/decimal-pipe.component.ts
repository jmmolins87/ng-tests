import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  templateUrl: './decimal-pipe.component.html',
  styleUrls: ['./decimal-pipe.component.css']
})
export class DecimalPipeComponent {

  public num: number;

  constructor() {
    this.num = 3.8192004930;
  }

}
