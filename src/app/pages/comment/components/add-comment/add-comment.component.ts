import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../user/models/user';
import { Confirmation } from '../../models/confirmation';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  addCommentForm: FormGroup;
  userList:User[]=[];

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
  }

  addComment(item:any) {
    this.commentService.addComment(item.value);
  }
}