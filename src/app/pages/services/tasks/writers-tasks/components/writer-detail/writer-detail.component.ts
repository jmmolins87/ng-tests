import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WritersService } from '../../services/writers.service';

import { Escritor } from '../../models/escritor.model';

@Component({
  selector: 'app-writer-detail',
  templateUrl: './writer-detail.component.html',
  styleUrls: ['./writer-detail.component.css']
})
export class WriterDetailComponent implements OnInit {

  public writer: Escritor;

  constructor( private activatedRoure: ActivatedRoute, private _writerService: WritersService ) {}

  ngOnInit(): void {
    this.activatedRoure.params.subscribe( async params => {
      this.writer = await this._writerService.getById(params['id']);
    });
  }

}
