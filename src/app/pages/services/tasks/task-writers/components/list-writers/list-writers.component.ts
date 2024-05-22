import { Component, OnInit } from '@angular/core';

import { WritersService } from '../../services/writers.service';
import { Escritor } from '../../models/escritor.model';

@Component({
  selector: 'app-list-writers',
  templateUrl: './list-writers.component.html',
  styleUrls: ['./list-writers.component.css']
})
export class ListWritersComponent implements OnInit {

  public listWriters: Escritor[];

  constructor( private _writersService: WritersService ) {
    this.listWriters = this._writersService.lsitWriters;
  }

  async ngOnInit() {
    this.listWriters = await this._writersService.getListWritersPromise();
  }

  async selectCountry( $event: any ) {
    if( $event.target.value === 'todos') {
      this.listWriters = await this._writersService.getListWritersPromise();
    } else {
      this.listWriters = await this._writersService.getbyCountry( $event.target.value )
    }
  }

}
