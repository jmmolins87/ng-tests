import { Component } from '@angular/core';

@Component({
  selector: 'app-chronometer-task',
  templateUrl: './chronometer-task.component.html',
  styleUrls: ['./chronometer-task.component.css']
})
export class ChronometerTaskComponent {

  public counter: number = 10;
  public finishCounter: boolean = false;

  constructor() {
    
  }

  startCounter() {
    let interval = setInterval(() => {
      this.counter--;
      if( this.counter === 0 ) {
        alert('Time is over!');
        clearInterval( interval )
        this.finishCounter = true;
      }
    }, 1000);
  }

}
