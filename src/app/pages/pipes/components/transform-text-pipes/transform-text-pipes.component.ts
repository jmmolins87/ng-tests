import { Component } from '@angular/core';

@Component({
  selector: 'app-transform-text-pipes',
  templateUrl: './transform-text-pipes.component.html',
  styleUrls: ['./transform-text-pipes.component.css']
})
export class TransformTextPipesComponent {

  public text: string;

  constructor() {
    this.text = 'En un lugar de la mancha';
  }

}
