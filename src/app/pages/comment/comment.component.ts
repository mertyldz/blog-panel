import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from './comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  titleList:string[]=["commentId", "postId", "userId", "comment", "creationDate", "isConfirmed"]

  comments:Comment[]=[];
  pageNumber:number=1;
  filterText:string='';

  constructor(private commentService:CommentService, private router:Router){
    
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(x=>this.comments=x);
      
  }

  detailComment(item:any){
    this.router.navigate(['/comment/detail/'+item.commentId])
  }

  editComment(item:any){
    this.router.navigate(['/comment/edit/'+ item.commentId])
  }

  deleteComment(item:any){
    this.commentService.removeComment(item.commentId);
  }
}
