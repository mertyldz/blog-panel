import { Injectable } from '@angular/core';
import { Category } from '../pages/category/category';

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
}
