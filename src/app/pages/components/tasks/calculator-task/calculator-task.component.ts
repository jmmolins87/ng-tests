import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-task',
  templateUrl: './calculator-task.component.html',
  styleUrls: ['./calculator-task.component.css']
})
export class CalculatorTaskComponent {

  public result: string = '';
  public finishCalculate: boolean = false;
  
  onClick($event: any) {
    if( this.finishCalculate ) {
      this.result = $event.target.innerText;
      this.finishCalculate = false;
    } else {
      this.result += $event.target.innerText;
    }
  }
  
  onResult() {
    this.result = eval(this.result);
    this.finishCalculate = true;
  }

}
