import { Component } from '@angular/core';

@Component({
  selector: 'app-son-two',
  templateUrl: './son-two.component.html',
  styleUrls: ['./son-two.component.css']
})
export class SonTwoComponent {

  public messageOtherAlert: string = 'Esta es la alerta del componente alert en el componente hijo dos';

}
