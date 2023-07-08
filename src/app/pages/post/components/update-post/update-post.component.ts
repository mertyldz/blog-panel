import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../../category/models/category';
import { UserService } from 'src/app/services/user.service';
import { CategoryService } from 'src/app/services/category.service';
import { User } from '../../../user/models/user';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  selectedPostId:number;
  selectedPost:Post;
  updatePostForm:FormGroup;
  userList:User[]=[];
  categoryList: Category[]= [];

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService, fb:FormBuilder, private userService:UserService, private categoryService:CategoryService){
    this.userService.getUserList().subscribe(x=>this.userList=x);
    this.selectedPostId=Number(activatedRoute.snapshot.paramMap.get("id"));
    this.selectedPost = this.postService.getPostById(this.selectedPostId);
    this.categoryService.getCategories().subscribe(x=>this.categoryList=x);

    this.updatePostForm=fb.group({
      postId:this.selectedPost.postId,
      userId:this.selectedPost.userId,
      categoryId:this.selectedPost.categoryId,
      title:this.selectedPost.title,
      viewCount:this.selectedPost.viewCount,
      creationDate:this.selectedPost.creationDate,
      isPublished:this.selectedPost.isPublished,
      content:this.selectedPost.content
    })
  }

  updatePost(item:any){
    this.selectedPost=item.value;
    this.postService.updatePost(this.selectedPostId, this.selectedPost);
  }

}
