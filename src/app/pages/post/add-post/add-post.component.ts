import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../post';
import { PostService } from 'src/app/services/post.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  addPostForm: FormGroup;
  post: Post = {
    postId: 0,
    userId: 0,
    categoryId: 0,
    title: '',
    content: '',
    viewCount: 0,
    creationDate: '',
    isPublished: false,
  };

  isPublished: PublishedStatus[] = [
    { status: 'Yayında', isPublished: true },
    { status: 'Yayında Değil', isPublished: false },
  ];

  constructor(fb: FormBuilder, private postService: PostService) {
    this.addPostForm = fb.group({
      postId: 0,
      userId: 0,
      categoryId: 0,
      title: '',
      content: '',
      viewCount: 0,
      creationDate: '',
      isPublished: false,
    });
  }

  save() {
    this.post = this.addPostForm.value;
    this.postService.addPost(this.post);
  }
}
export interface PublishedStatus {
  status: string;
  isPublished: boolean;
}
