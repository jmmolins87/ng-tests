import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output
} from '@angular/core';

@Component({
  selector: 'app-chronometer-output-task',
  templateUrl: './chronometer-output-task.component.html',
  styleUrls: ['./chronometer-output-task.component.css']
})
export class ChronometerOutputTaskComponent implements OnInit {

  public finishCounter: boolean = false;
  public counter: number = 10;

  @Input()
  public start: number = 0;

  @Output()
  public finish: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.counter = this.start ? this.start : 10;
  }

  startCounter() {
    let interval = setInterval(() => {
      this.counter--;
      if( this.counter === 0 ) {
        alert('Time is over!');
        clearInterval( interval )
        this.finishCounter = true;
        this.counter = this.start;
        this.finish.emit('Finaliza el cronómetro con el número: ' + this.start );
      }
    }, 1000);
  }

}
