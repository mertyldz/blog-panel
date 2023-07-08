import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../../models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  addPostForm: FormGroup;

  constructor(fb: FormBuilder, private postService: PostService) {
    let tempPostId;
    this.postService.getPosts().subscribe(x=> tempPostId=x.length + 1)

    this.addPostForm = fb.group({
      postId: (tempPostId),
      userId: 1,
      categoryId: 1,
      title: '',
      content: '',
      viewCount: 0,
      creationDate: '',
      isPublished: false,
    });
  }

  addPost(item:any) {
    let post:Post = item.value;
    this.postService.addPost(post)
  }
}