import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Input()
  public numOne: number = 60;
  @Input()
  public numTwo: number = 30;
  public result!: number;

  resultOperation() {
    this.result = this.numOne + this.numTwo;
  }

}
