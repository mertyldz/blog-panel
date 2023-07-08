import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../models/comment';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../user/models/user';
import { Confirmation } from '../../models/confirmation';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css'],
})
export class UpdateCommentComponent{
  userList:User[]=[];
  selectedCommentId:number;
  editCommentForm: FormGroup;
  comments:Comment[]=[];
  selectedComment:Comment;


  constructor(fb: FormBuilder, private activatedRoute:ActivatedRoute, private commentService:CommentService, private userService:UserService) {
    this.userService.getUserList().subscribe(x=>this.userList=x);
    this.selectedCommentId=Number(activatedRoute.snapshot.paramMap.get("id"));
    this.commentService.getComments().subscribe(x=>this.comments=x);
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
