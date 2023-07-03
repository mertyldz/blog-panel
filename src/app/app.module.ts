import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
import { CategoryComponent } from './pages/category/category.component';
import { CommentComponent } from './pages/comment/comment.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { AsideComponent } from './commons/aside/aside.component';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';
import { AsidePostComponent } from './commons/aside-post/aside-post.component';

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
    AsidePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
