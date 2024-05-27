import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {

  public text: string;
  public numbers: number[];

  constructor() {
    this.text = 'En algún lugar de la Mancha';
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]; 
  }

}
