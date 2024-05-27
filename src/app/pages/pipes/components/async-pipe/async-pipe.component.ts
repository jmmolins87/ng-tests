import { Component } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  public prom: Promise<string>;
  public promToServe: Promise<any>;

  constructor( private postService: PostsService ) {
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Se resuelve la promesa pasados 4 segundos'), 4000)
    })

    this.promToServe = this.postService.getAll();
  }

}
