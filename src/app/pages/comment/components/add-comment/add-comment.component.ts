import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../user/user';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  addCommentForm: FormGroup;
  addNewComment: Comment;
  userList:User[]=[];


  confirmMenu: Confirmation[] = [
    { status: 'Onaylandı', value: true },
    { status: 'Onaylanmadı', value: false }
  ];

  constructor(fb: FormBuilder, private commentService: CommentService, private userService:UserService) {
    let generateId=this.commentService.getLastId() + 1; 
    this.userService.getUserList().subscribe(x=>this.userList=x);

    this.addCommentForm = fb.group({
      commentId: generateId,
      postId: 0,
      userId: 1,
      comment: '',
      creationDate: '',
      isConfirmed: false,
    });
    this.addNewComment = this.addCommentForm.value;
  }

  addComment() {
    this.addNewComment = this.addCommentForm.value;
    this.commentService.addComment(this.addNewComment);
  }
}

export interface Confirmation {
  status: string;
  value: boolean;
}
