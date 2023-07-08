import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css'],
})
export class UpdateCommentComponent{
  selectedCommentId:number;
  editCommentForm: FormGroup;
  selectedComment:Comment;


  constructor(fb: FormBuilder, private activatedRoute:ActivatedRoute, private commentService:CommentService) {
    this.selectedCommentId=Number(activatedRoute.snapshot.paramMap.get("id"));
    this.selectedComment= this.commentService.getCommentById(this.selectedCommentId);

    this.editCommentForm = fb.group({
      commentId: this.selectedComment.commentId,
      postId: this.selectedComment.postId,
      userId: this.selectedComment.userId,
      comment: this.selectedComment.comment,
      creationDate: this.selectedComment.creationDate,
      isConfirmed: this.selectedComment.isConfirmed,
    });    
  }

  editComment(item:any) {
    let comment:Comment=item.value;
    this.commentService.updateComment(this.selectedCommentId, comment)
  }
}
