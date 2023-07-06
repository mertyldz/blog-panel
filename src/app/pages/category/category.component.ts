import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  pageNumber:number=1;
  categories: Category[]=[]

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(x=>this.categories=x);
  }

  removeCategory(id:number){
    this.categoryService.removeCategory(id)
  }
  updateCategory(){}
}
