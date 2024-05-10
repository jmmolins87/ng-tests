import { Component } from '@angular/core';

@Component({
  selector: 'app-son-one',
  templateUrl: './son-one.component.html',
  styleUrls: ['./son-one.component.css']
})
export class SonOneComponent {

  public messageOtherAlert: string = 'Esta es la alerta del componente alert en el componente hijo uno';

}
