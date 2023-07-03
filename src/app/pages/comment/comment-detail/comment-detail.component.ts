import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../comment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css'],
})
export class CommentDetailComponent {
  selectedCommentId: number;
  selectedComment:Comment;
  selectedUsername:string;
  constructor(private router: ActivatedRoute, private commentService:CommentService, private userService:UserService) {
    this.selectedCommentId = Number(this.router.snapshot.paramMap.get('id'));
    this.selectedComment= this.commentService.getCommentById(this.selectedCommentId);
    this.selectedUsername=this.userService.getUsernameById(this.selectedComment.userId);
  }
}
