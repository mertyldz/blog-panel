import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from './post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  pageNumber:number=1;
  
  constructor(private postService: PostService, private commentService:CommentService) {}

  postList: Post[] = this.postService.getPosts();

  deleteUser(id:number){
    if(this.commentService.calculateCommentNumber(id)===0){
      this.postService.deleteUser(id);
    } else {
      alert("Gönderiye ait yorum bulunmaktadır, silme işlemi gerçekleştirilemez!")
    }
  }
  showUserDetails(){
    console.log("Detay sayfası")
  }

}
