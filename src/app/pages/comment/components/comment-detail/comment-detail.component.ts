import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../models/comment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css'],
})
export class CommentDetailComponent {
  selectedComment:Comment;    
  
  constructor(private router: ActivatedRoute, private commentService:CommentService, private userService:UserService) {
    this.selectedComment = this.commentService.detailComment;
  }
}
