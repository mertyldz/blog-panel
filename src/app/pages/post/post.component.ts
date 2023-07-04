import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from './post';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  pageNumber: number = 1;
  postList: Post[] = [];
  nonFilteredPostList: Post[] = [];
  filterPostId: string = '';
  filterUserId: string = '';
  filterCategoryId: string = '';
  filteredPosts:Post[]=[];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(x=>this.postList=x);
    this.postService.getPosts().subscribe(x=>this.nonFilteredPostList=x);



    this.activatedRoute.queryParamMap.subscribe((query) => {
      if (query.get('postId') !== null) {
        this.filterPostId = String(query.get('postId'));
      }
      if (query.get('filterUserId') !== null) {
        this.filterUserId = String(query.get('postId'));
      }
      if (query.get('filterCategoryId') !== null) {
        this.filterCategoryId = String(query.get('postId'));
      }
    });
  }

  write() {
    this.filter();
  }

  deleteUser(id: number) {
    if (this.commentService.calculateCommentNumber(id) === 0) {
      this.postService.deleteUser(id);
    } else {
      alert(
        'Gönderiye ait yorum bulunmaktadır, silme işlemi gerçekleştirilemez!'
      );
    }
  }

  filter() {
    this.router.navigate(['/post'], {
      queryParams: {
        userId: this.filterUserId,
        postId: this.filterPostId,
        categoryId: this.filterCategoryId,
      },
    });


    // this.postService.getPosts().pipe(map(x =>{
    //   x.filter(y=> y.postId===Number(this.filterPostId));
    //   x.filter(y=> y.userId===Number(this.filterUserId));
    //   x.filter(y=> y.categoryId===Number(this.filterCategoryId));
    // }))
    //   .subscribe(x=> this.postList=x)

     if(this.filterPostId!==''){
       this.postList=this.postList.filter(x => x.postId===Number(this.filterPostId));
     }
     if(this.filterUserId!==''){
       this.postList=this.postList.filter(x => x.userId===Number(this.filterUserId));
     }
     if(this.filterCategoryId!==''){
       this.postList=this.postList.filter(x => x.categoryId===Number(this.filterCategoryId));
     }

  }

  removeFilter() {
    this.filterPostId = '';
    this.filterUserId = '';
    this.filterCategoryId = '';
    this.postList = this.nonFilteredPostList;
    this.router.navigateByUrl('/post');
  }
}
