import { Injectable } from '@angular/core';
import { Category } from '../pages/category/category';
import { Post } from '../pages/post/post';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories:Category[]=[{
    "categoryId": 1,
    "name": "Curb & Gutter",
    "creationDate": "05/30/2017"
  }, {
    "categoryId": 2,
    "name": "Temp Fencing, Decorative Fencing and Gates",
    "creationDate": "09/07/2017"
  }, {
    "categoryId": 3,
    "name": "Painting & Vinyl Wall Covering",
    "creationDate": "06/21/2017"
  }, {
    "categoryId": 4,
    "name": "Fire Sprinkler System",
    "creationDate": "08/24/2017"
  }, {
    "categoryId": 5,
    "name": "Construction Clean and Final Clean",
    "creationDate": "12/11/2017"
  }];

  constructor() { }

  getCategories(){
    return this.categories;
  }
  
  getIndex(id: number): number {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].categoryId === id) {
        return i;
      }
    }
    return -1;
  }

  getCategoryNameById(id:number):string{
    let index = this.getIndex(id);
    return String(this.categories[index].name);
  }
  getCategoryById(id:number):Category{
    let index = this.getIndex(id);
    return this.categories[index];
  }

  removeCategory(id:number){
    let index = this.getIndex(id);
    this.categories.splice(index,1);
  }

  updateCategory(id:number, category:Category){
    let index = this.getIndex(id);
    this.categories[index].name= category.name;
    this.categories[index].categoryId= category.categoryId;
    this.categories[index].creationDate= category.creationDate;
  }
}
