import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styleUrls: ['./slice-pipe.component.css']
})
export class SlicePipeComponent {

  public animals: string[];
  public min: number;
  public max: number;

  constructor() {
    this.animals = ['Perro', 'Gato', 'Pájaro', 'Tortuga'];
    this.min = 0;
    this.max = this.animals.length;
  }

}
