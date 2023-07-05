import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
import { CategoryComponent } from './pages/category/category.component';
import { CommentComponent } from './pages/comment/comment.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { AsideComponent } from './commons/aside/aside.component';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';
import { AddPostComponent } from './pages/post/add-post/add-post.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component';
import { DetailCategoryComponent } from './pages/category/detail-category/detail-category.component';
import { CommentDetailComponent } from './pages/comment/comment-detail/comment-detail.component';
import { AddCommentComponent } from './pages/comment/add-comment/add-comment.component';
import { UpdateCommentComponent } from './pages/comment/update-comment/update-comment.component';
import { UpdatePostComponent } from './pages/post/update-post/update-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentFilterPipe } from './pipes/commentfilter.pipe';
import { UserbooleanPipe } from './pipes/userboolean.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { PublishedPipe } from './pipes/published.pipe';
import { CommentconfirmPipe } from './pipes/commentconfirm.pipe';
import { ButtonComponent } from './commons/button/button.component';
import { DeleteButtonComponent } from './commons/delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    PostComponent,
    CategoryComponent,
    CommentComponent,
    AddUserComponent,
    UpdateUserComponent,
    AsideComponent,
    PostDetailComponent,
    AddPostComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DetailCategoryComponent,
    CommentDetailComponent,
    AddCommentComponent,
    UpdateCommentComponent,
    UpdatePostComponent,
    CommentFilterPipe,
    UserbooleanPipe,
    UsernamePipe,
    PublishedPipe,
    CommentconfirmPipe,
    ButtonComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
