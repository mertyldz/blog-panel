import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  updateCategoryForm: FormGroup;
  editedCategory: Category;
  selectedId: number;
  categories: Category[] = [];
  selectedCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    fb: FormBuilder,
    private router: Router
  ) {
    this.selectedId = Number(activatedRoute.snapshot.paramMap.get('id'));
    this.categoryService.getCategories().subscribe(x=>this.categories=x);
    this.selectedCategory = this.categoryService.getCategoryById(this.selectedId);

    this.updateCategoryForm = fb.group({
      categoryId: this.selectedCategory.categoryId,
      name: this.selectedCategory.name,
      creationDate: this.selectedCategory.creationDate,
    });

    // in order to stop error for not defining in constructor.
    this.editedCategory = this.updateCategoryForm.value;
  }

  update() {
    this.editedCategory = this.updateCategoryForm.value;
    this.categoryService.updateCategory(this.selectedId, this.editedCategory);
    this.router.navigateByUrl('/category');
  }
}
