import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  public message!: string;
  public movies: string[] = ['Superman', 'Batman', 'Ironman', 'Capitan América'];

  onClick($event: any) {
    console.log('Se ha pulsado el botón');
    console.log($event);
  }

  onChange($event: any) {
    console.log($event)
  }

  onMouseOver() {
    console.log('Entra el mouse')
    this.message = 'Entra el mouse'
  }
  
  onMouseLeave() {
    console.log('Sale el mouse');
    this.message = 'Sale el mouse'
  }

  onChangeInput($event: any) {
    console.log($event.target.value);
  }

  onInput($event: any) {
    console.log($event.target.value);
    this.message = $event.target.value;
  }

  onFocus() {
    console.log('Recibe el foco');
  }

  onBlur() {
    console.log('Pierde el foco');
  }

}
