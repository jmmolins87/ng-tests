import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WritersService } from '../../services/writers.service';

import { Escritor } from '../../models/escritor.model';

@Component({
  selector: 'app-writers-detail',
  templateUrl: './writers-detail.component.html',
  styleUrls: ['./writers-detail.component.css']
})
export class WritersDetailComponent implements OnInit {

  public writer: Escritor;

  constructor( private activatedRoute: ActivatedRoute, private _writersService: WritersService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( async params => {
      this.writer = await this._writersService.getById(parseInt(params['id']));
    })
  }

}
