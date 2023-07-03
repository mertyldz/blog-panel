import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from '../../comment/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId: number;
  post?: Post;
  categoryName?: string;
  username?: string;
  comments: Comment[] = [];
  showComment: ShowComment[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private userService: UserService,
    private commentService: CommentService
  ) {
    this.postId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.post = this.postService.getPostById(this.postId);
    this.categoryName = this.categoryService.getCategoryNameById(this.post.categoryId);
    this.username = this.userService.getUsernameById(this.post.userId);
    this.comments = this.commentService.filterCommentsByPostId(this.postId);

    // get name of users that comment
    for(let comment of this.comments){
      let newComment:ShowComment= {username:this.userService.getUsernameById(comment.userId), comment:comment.comment};
      this.showComment.push(newComment);
    }
    
  }
}

export interface ShowComment{
  username:string,
  comment:string,
}
