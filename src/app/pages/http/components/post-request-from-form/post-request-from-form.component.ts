import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-request-from-form',
  templateUrl: './post-request-from-form.component.html',
  styleUrls: ['./post-request-from-form.component.css']
})
export class PostRequestFromFormComponent {

  public posts: any[] = [];
  public myForm: FormGroup;

  constructor( private _postService: PostService ) {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    });
  }

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

  async onSubmit() {
    try {
      const response = await this._postService.createPost(this.myForm.value)
      console.log(response)
    }
    catch(error) {
      console.log(error);
    }
  }

}
