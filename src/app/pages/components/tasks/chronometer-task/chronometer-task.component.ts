import { Component } from '@angular/core';

@Component({
  selector: 'app-chronometer-task',
  templateUrl: './chronometer-task.component.html',
  styleUrls: ['./chronometer-task.component.css']
})
export class ChronometerTaskComponent {

  public counter: number = 10;
  public finishCounter: boolean = false;
  public numbers: number[] = [1, 2, 4, 5, 8, 9, 10];

  constructor() { }

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

  onFinishChronometer($event: any) {
    console.log($event);
  }

}
