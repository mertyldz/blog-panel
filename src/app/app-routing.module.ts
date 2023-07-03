import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
import { CategoryComponent } from './pages/category/category.component';
import { CommentComponent } from './pages/comment/comment.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';
import { AddPostComponent } from './pages/post/add-post/add-post.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/:id', component: UpdateUserComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/add', component: AddPostComponent },
  { path: 'post/:id', component: PostDetailComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'comment', component: CommentComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
