import { Component } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-put-and-delete-request',
  templateUrl: './put-and-delete-request.component.html',
  styleUrls: ['./put-and-delete-request.component.css']
})
export class PutAndDeleteRequestComponent {

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

  onUpdatePost() {
    this._postService.updatePost({ 
      id: 5, 
      title: 'Nuevo título', 
      body: 'Nuevo cuerpo del post', 
      userId: 3 
    })
      .then( data => console.log( data ))
      .catch( err => console.log( err ));
  }

  onDeletePost() {
    this._postService.deletePost(5)
      .then( data => console.log( data ))
      .catch( err => console.log( err ));
  }
  
}
