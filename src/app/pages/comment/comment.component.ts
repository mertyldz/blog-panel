import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments:Comment[];

  constructor(private commentService:CommentService){
    this.comments=this.commentService.getComments();
  }

  removeComment(id:number){this.commentService.removeComment(id)}

}
