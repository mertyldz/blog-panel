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
  titleList:string[]=["postId", "userId", "categoryId", "title", "viewCount", "creationDate"]

  pageNumber: number = 1; 
  postList: Post[] = [];
  nonFilteredPostList: Post[] = [];
  postId:number=0;

  filterPostId: string = '';
  filterUserId: string = '';
  filterCategoryId: string = '';

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((x) => (this.postList = x));
    this.postService
      .getPosts()
      .subscribe((x) => (this.nonFilteredPostList = x));

    this.activatedRoute.queryParamMap.subscribe((query) => {
      if (query.get('categoryId') !== null) {
        this.filterCategoryId = String(query.get('categoryId'));
      }
    });
    this.activatedRoute.queryParamMap.subscribe((query) => {
      if (query.get('userId') !== null) {
        this.filterUserId = String(query.get('userId'));
      }
    });
    this.activatedRoute.queryParamMap.subscribe((query) => {
      if (query.get('postId') !== null) {
        this.filterPostId = String(query.get('postId'));
      }
    });
    this.filter();
  }

  editUser(item:any){
    this.router.navigate(['/post/update/'+item.postId]);
  }

  detailUser(item:any){
    this.router.navigate(['/post/'+item.postId]);
  }

  deleteUser(item:any){
    if (this.commentService.calculateCommentNumber(item.postId) === 0) {
      this.postService.deleteUser(item.postId);
    } else {
      alert(
        'Gönderiye ait yorum bulunmaktadır, silme işlemi gerçekleştirilemez!'
      );
    }
  }

    


  // Filtering methods

  filter() {
    this.router.navigate(['/post'], {
      queryParams: {
        userId: this.filterUserId,
        postId: this.filterPostId,
        categoryId: this.filterCategoryId,
      },
    });


    if (this.filterPostId !== '') {
      this.postList = this.postList.filter(
        (x) => x.postId === Number(this.filterPostId)
      );
    }
    if (this.filterUserId !== '') {
      this.postList = this.postList.filter(
        (x) => x.userId === Number(this.filterUserId)
      );
    }
    if (this.filterCategoryId !== '') {
      this.postList = this.postList.filter(
        (x) => x.categoryId === Number(this.filterCategoryId)
      );
    }

    console.log(this.filterCategoryId);
  }

  removeFilter() {
    this.filterPostId = '';
    this.filterUserId = '';
    this.filterCategoryId = '';
    this.postList = this.nonFilteredPostList;
    this.router.navigateByUrl('/post');
  }
}
