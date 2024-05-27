import { Component, OnInit } from '@angular/core';

import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty-task',
  templateUrl: './rick-and-morty-task.component.html',
  styleUrls: ['./rick-and-morty-task.component.css']
})
export class RickAndMortyTaskComponent implements OnInit {

  public characters: any[] = [];
  public currentPage: number;
  public numPages: number;

  constructor( private _rickMortyService: RickAndMortyService  ) {
    this.currentPage = 1;
  }

  ngOnInit() {
  this._rickMortyService.getRickyMortyCharacters( this.currentPage )
    .then( characters => {
      this.characters = characters['results'];
      this.numPages = characters['info']['pages'];
      console.log(this.characters)
    })
    .catch( error => {
      console.log(error)
    })
  }

  async changePage(next) {
    if( next ) {
      this.currentPage++;
    } else {    
      this.currentPage--;
    }
    const page = await this._rickMortyService.getRickyMortyCharacters( this.currentPage )
    this.characters = page['results'];
  }

}
