import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { PostDetailComponent } from './pages/post/components/post-detail/post-detail.component';
import { AddPostComponent } from './pages/post/components/add-post/add-post.component';
import { AddCategoryComponent } from './pages/category/components/add-category/add-category.component';
import { EditCategoryComponent } from './pages/category/components/edit-category/edit-category.component';
import { DetailCategoryComponent } from './pages/category/components/detail-category/detail-category.component';
import { CommentDetailComponent } from './pages/comment/components/comment-detail/comment-detail.component';
import { AddCommentComponent } from './pages/comment/components/add-comment/add-comment.component';
import { UpdateCommentComponent } from './pages/comment/components/update-comment/update-comment.component';
import { UpdatePostComponent } from './pages/post/components/update-post/update-post.component';
import { CategoryComponent } from './pages/category/components/list-category/category.component';
import { CommentComponent } from './pages/comment/components/list-comment/comment.component';
import { PostComponent } from './pages/post/components/list-post/post.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/:id', component: UpdateUserComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/add', component: AddPostComponent },
  { path: 'post/update/:id', component: UpdatePostComponent },
  { path: 'post/:id', component: PostDetailComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'category/add', component: AddCategoryComponent },
  { path: 'category/edit/:id', component: EditCategoryComponent },
  { path: 'category/detail/:id', component: DetailCategoryComponent },
  { path: 'comment', component: CommentComponent},
  { path: 'comment/add', component: AddCommentComponent },
  { path: 'comment/detail/:id', component: CommentDetailComponent },
  { path: 'comment/edit/:id', component: UpdateCommentComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
