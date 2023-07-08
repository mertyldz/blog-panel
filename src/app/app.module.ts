import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './pages/category/category-module/category.module';
import { CommentModuleModule } from './pages/comment/comment-module/comment.module';
import { PostModule } from './pages/post/post-module/post.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    CategoryModule,
    CommentModuleModule,
    PostModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
