import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId: number;
  post?: Post;
  categoryName?: string;
  username?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private userService: UserService
  ) {
    this.postId = Number(activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.post = this.postService.getPostById(this.postId);
    this.categoryName = this.categoryService.getCategoryNameById(this.postId);
    this.username = this.userService.getUsernameById(this.post.userId);
  }
}
