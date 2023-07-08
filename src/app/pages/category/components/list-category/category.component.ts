import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  titleList:string[]=["categoryId", "name", "creationDate"]
  // , "DETAY", "DÜZENLE", "SİL"

  pageNumber:number=1;
  categories: Category[]=[]

  constructor(private categoryService: CategoryService, private router:Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(x=>this.categories=x);
  }


  editCategory(item:any){
    this.router.navigate(['/category/edit/' + item.categoryId]);
  }

  deleteCategory(item:any){
    this.categoryService.removeCategory(item.categoryId)
  }

  detailCategory(item:any){
    this.categoryService.detailData=item;
    this.router.navigate(['/category/detail/' + item.categoryId]);
  }
}
