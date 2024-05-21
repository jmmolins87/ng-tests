import { Component, OnInit } from '@angular/core';

import { WritersService } from '../../services/writers.service';

import { Escritor } from '../../models/escritor.model';

@Component({
  selector: 'app-list-writers',
  templateUrl: './list-writers.component.html',
  styleUrls: ['./list-writers.component.css']
})
export class ListWritersComponent implements OnInit {

  public listWriters!: Escritor[];

  constructor( private _writersService: WritersService ) {}

  async ngOnInit() {
    // this.listWriters = this._writersService.writers;  
    // this._writersService.writersPromise.then(( writers: Escritor[] ) => {
    //   this.listWriters = writers;
    // });  
    this.listWriters = await this._writersService.writersPromise;
  }

  async onSelectCountry($event: any) {
    if( $event.target.value === 'todos' ) {
      this.listWriters = await this._writersService.writersPromise;
    } else {
      this.listWriters = await this._writersService.getselectByCountry($event.target.value);
    }
  }

}
