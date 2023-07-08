import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
import { CommentComponent } from './pages/comment/comment.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';
import { AddPostComponent } from './pages/post/add-post/add-post.component';
import { CommentDetailComponent } from './pages/comment/comment-detail/comment-detail.component';
import { AddCommentComponent } from './pages/comment/add-comment/add-comment.component';
import { UpdateCommentComponent } from './pages/comment/update-comment/update-comment.component';
import { UpdatePostComponent } from './pages/post/update-post/update-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './pages/category/category-module/category.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    AddUserComponent,
    UpdateUserComponent,
    PostDetailComponent,
    AddPostComponent,
    CommentDetailComponent,
    AddCommentComponent,
    UpdateCommentComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
