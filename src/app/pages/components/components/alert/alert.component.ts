import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input()
  public message: string = 'Mensaje de la alerta por defecto';

  @Output()
  public alertClicked: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.alertClicked.emit();
  }

}
