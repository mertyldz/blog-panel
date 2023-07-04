import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  pageNumber:number=1;

  constructor(private categoryService: CategoryService) {}

  categories: Category[] = this.categoryService.getCategories();

  removeCategory(id:number){
    this.categoryService.removeCategory(id)
  }
  updateCategory(){}
}
