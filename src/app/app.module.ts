import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';
import { AddPostComponent } from './pages/post/add-post/add-post.component';
import { UpdatePostComponent } from './pages/post/update-post/update-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './pages/category/category-module/category.module';
import { CommentModuleModule } from './pages/comment/comment-module/comment.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    
    AddUserComponent,
    UpdateUserComponent,
    PostDetailComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    CategoryModule,
    CommentModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
