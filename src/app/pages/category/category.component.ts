import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = this.categoryService.getCategories();
}
