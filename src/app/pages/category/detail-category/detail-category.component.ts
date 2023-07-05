import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css'],
})
export class DetailCategoryComponent {
  selectedId: number;
  selectedCategory: Category;
  totalPost: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private postService: PostService,
    private router: Router
  ) {
    this.selectedId = Number(activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.selectedId);
    this.selectedCategory = this.categoryService.getCategoryById(
      this.selectedId
    );
    this.totalPost = this.postService.getTotalPostByCategoryId(this.selectedId);
  }

  navigateToPosts() {
    console.log(this.selectedId);
     this.router.navigate(['/post'], {
       queryParams: { categoryId: this.selectedId },
     }); 
  }
}
