import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../../services/books.service';

import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  public books: Libro[];

  constructor( private _booksService: BooksService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe( async params => {
      this.books = await this._booksService.getByWriter( params['id']);
    })
  }

}
