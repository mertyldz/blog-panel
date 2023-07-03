import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(private postService: PostService) {}
  postList: Post[] = this.postService.getPosts();

  deleteUser(id:number){
    this.postService.deleteUser(id);
  }
  showUserDetails(){
    console.log("Detay sayfası")
  }

}
