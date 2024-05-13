import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {

  public messageEvent: string = 'Alerta con un Output con evento'

  onClickAlert() {
    console.log('Alerta pulsada');
  }

  onClickAlertWithEvent($event: any) {
    console.log('Alerta pulsada con evento:', $event);
  }

}
