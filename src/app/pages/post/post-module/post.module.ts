import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../components/list-post/post.component';
import { PostDetailComponent } from '../components/post-detail/post-detail.component';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { UpdatePostComponent } from '../components/update-post/update-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostComponent,
    PostDetailComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PostModule { }
