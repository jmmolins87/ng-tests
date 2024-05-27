import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {

  public posts: any[] = [];

  constructor( private _postService: PostService ) {}

  ngOnInit(): void {
    this._postService.jsonPlaceholder
      .then( data => this.posts = data)
      .catch( err => console.log( err ));
  }

}
