import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  titleList: string[] = [
    'postId',
    'userId',
    'categoryId',
    'title',
    'viewCount',
    'creationDate',
  ];

  pageNumber: number = 1;
  postList: Post[] = [];
  nonFilteredPostList: Post[] = [];
  postId: number = 0;

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

    //get query params
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

  editUser(item: any) {
    this.router.navigate(['/post/update/' + item.postId]);
  }

  detailUser(item: any) {
    this.router.navigate(['/post/' + item.postId]);
  }

  deleteUser(item: any) {
    this.postService.deleteUser(item.postId);
  }

  // Filtering methods
  filter() {
    //navigate
    this.router.navigate(['/post'], {
      queryParams: {
        userId: this.filterUserId,
        postId: this.filterPostId,
        categoryId: this.filterCategoryId,
      },
    });

    //filtering
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
  }

  removeFilter() {
    this.filterPostId = '';
    this.filterUserId = '';
    this.filterCategoryId = '';
    this.postList = this.nonFilteredPostList;
    this.router.navigateByUrl('/post');
  }
}
