import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  selectedPostId:number;
  selectedPost:Post;
  updatePostForm:FormGroup;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService, fb:FormBuilder){
    this.selectedPostId=Number(activatedRoute.snapshot.paramMap.get("id"));
    this.selectedPost = this.postService.getPostById(this.selectedPostId);

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
