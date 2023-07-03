import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../post';
import { PostService } from 'src/app/services/post.service';
import { User } from '../../user/user';
import { UserService } from 'src/app/services/user.service';
import { Category } from '../../category/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  addPostForm: FormGroup;
  userList:User[]=this.userService.getUserList();
  categoryList: Category[]= this.categoryService.getCategories();
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

  constructor(fb: FormBuilder, private postService: PostService, private userService:UserService, private categoryService:CategoryService) {
    this.addPostForm = fb.group({
      postId: 0,
      userId: 1,
      categoryId: 1,
      title: '',
      content: '',
      viewCount: 0,
      creationDate: '',
      isPublished: false,
    });
  }

  save() {
    this.post = this.addPostForm.value;
    this.postService.addPost(this.post)
    console.log(this.post.userId)
  }



}
export interface PublishedStatus {
  status: string;
  isPublished: boolean;
}
