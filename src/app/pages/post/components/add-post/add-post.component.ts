import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../../models/post';
import { PostService } from 'src/app/services/post.service';
import { User } from '../../../user/user';
import { UserService } from 'src/app/services/user.service';
import { Category } from '../../../category/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  addPostForm: FormGroup;
  userList:User[]=[];
  categoryList: Category[]= [];
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

  constructor(fb: FormBuilder, private postService: PostService, private userService:UserService, private categoryService:CategoryService, private router:Router) {
    this.userService.getUserList().subscribe(x=>this.userList=x);
    let tempPostId;
    this.postService.getPosts().subscribe(x=> tempPostId=x.length + 1)
    this.categoryService.getCategories().subscribe(x=>this.categoryList=x);


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

  save() {
    this.post = this.addPostForm.value;
    this.postService.addPost(this.post)
    alert("Post başarıyla eklendi!")
    this.router.navigateByUrl('/post')
  }

}
export interface PublishedStatus {
  status: string;
  isPublished: boolean;
}
