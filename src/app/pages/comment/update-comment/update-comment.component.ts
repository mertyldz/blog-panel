import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../comment';
import { Confirmation } from '../add-comment/add-comment.component';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css'],
})
export class UpdateCommentComponent {


  userList:User[]=this.userService.getUserList();
  confirmMenu: Confirmation[] = [
    { status: 'Onaylandı', value: true },
    { status: 'Onaylanmadı', value: false }
  ];

  selectedCommentId:number;
  editCommentForm: FormGroup;
  comments:Comment[]=[];
  selectedComment:Comment;
  updatedComment:Comment;


  constructor(fb: FormBuilder, private activatedRoute:ActivatedRoute, private commentService:CommentService, private userService:UserService) {
    this.selectedCommentId=Number(activatedRoute.snapshot.paramMap.get("id"));
    this.comments = this.commentService.getComments();
    this.selectedComment=this.comments[this.selectedCommentId];

    this.editCommentForm = fb.group({
      commentId: this.selectedComment.commentId,
      postId: this.selectedComment.postId,
      userId: this.selectedComment.userId,
      comment: this.selectedComment.comment,
      creationDate: this.selectedComment.creationDate,
      isConfirmed: this.selectedComment.isConfirmed,
    });

    this.updatedComment=this.editCommentForm.value;
    
  }
  
  editComment() {
    this.updatedComment=this.editCommentForm.value;
    this.commentService.updateComment(this.selectedCommentId, this.updatedComment)
  }
}
