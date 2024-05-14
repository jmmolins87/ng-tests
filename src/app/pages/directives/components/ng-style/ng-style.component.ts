import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  public stylesPropsParagraph: any = {
    color: 'black',
    fontSize: '24px'
  }

  changeColor( sColor: string ) {
    switch( sColor ) {
      case 's':
        this.stylesPropsParagraph.color = 'green';
        break;
      case 'd':
        this.stylesPropsParagraph.color = 'red';
        break;
      case 'w':
        this.stylesPropsParagraph.color = 'yellow';
        break;
      default:
        this.stylesPropsParagraph.color = 'black';
    }
  }

  onChangeFontSize( $event: any ) {
    this.stylesPropsParagraph.fontSize = $event.target.value + 'px';
  }

}
