import { Component } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent {

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

  onClickPost() {
    this._postService.createPost({
      title: 'Nuevo post',
      body: 'Cuerpo del post',
      userId: 1
    }).then( data => {
      console.log(data);
    }).catch( err => {
      console.log(err);
    })
  }

}
