import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';
import { UserService } from 'src/app/services/user.service';
import { Comment } from '../../../comment/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { ShowComment } from '../../models/show-comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId: number=0;
  post?: Post;
  categoryName: string='';
  username?: string;
  comments: Comment[] = [];
  showComment: ShowComment[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    this.post = this.postService.detailPost;
    this.comments = this.commentService.filterCommentsByPostId(this.postId);

    // get name of users that comment
    for(let comment of this.comments){
      let newComment:ShowComment= {username:this.userService.getUsernameById(comment.userId), comment:comment.comment};
      this.showComment.push(newComment);
    }
  }
}