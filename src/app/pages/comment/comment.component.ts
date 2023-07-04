import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  comments:Comment[]=[];
  pageNumber:number=1;
  filterText:string='';

  constructor(private commentService:CommentService){
    
  }

  ngOnInit(): void {
    this.comments=this.comments=this.commentService.getComments();
      
  }

  removeComment(id:number){this.commentService.removeComment(id)}

}
