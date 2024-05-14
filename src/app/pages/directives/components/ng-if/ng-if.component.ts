import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  public showParragraph: boolean = true;
  public textButton: string = 'Ocultar texto';

  showHideText() {
    this.showParragraph = !this.showParragraph;
  }

}
