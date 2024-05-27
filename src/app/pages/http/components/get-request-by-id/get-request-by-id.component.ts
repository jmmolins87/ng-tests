import { Component } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-get-request-by-id',
  templateUrl: './get-request-by-id.component.html',
  styleUrls: ['./get-request-by-id.component.css']
})
export class GetRequestByIdComponent {

  public posts: any[] = [];

  constructor( private _postService: PostService ) {}

  ngOnInit(): void {
    this._postService.jsonPlaceholder
      .then( data => this.posts = data)
      .catch( err => console.log( err ));
  }

  async goToId(postId) {
    try {
      const post = await this._postService.getJsonPlaceholderById(postId);
      console.log(post);
    }
    catch(error) {
      console.log(error);
    }
  }

}
