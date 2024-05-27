import { Component, OnInit } from '@angular/core';

import { AnimationsLightTraffic } from '../../animations/lightTraffic';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: AnimationsLightTraffic
})
export class AnimationsComponent implements OnInit {

  public colorLightTraffic: string;

  constructor() {
    this.colorLightTraffic = 'stop'
  }

  ngOnInit() {
    setInterval(() => {
      if( this.colorLightTraffic === 'stop' ) {
        this.colorLightTraffic = 'warning';
      } else if( this.colorLightTraffic === 'warning' ) {
        this.colorLightTraffic = 'go'
      } else if( this.colorLightTraffic === 'go' ) {
        this.colorLightTraffic = 'stop'
      }
    }, 2000)
  }

}
