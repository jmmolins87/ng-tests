import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {

  public message: string = 'Hello, World!';

  constructor() { 

    setTimeout(() => {
      this.message = 'Hello, Angular!';
    }, 2000)
  }

}
