import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../components/list-comment/comment.component';
import { CommentDetailComponent } from '../components/comment-detail/comment-detail.component';
import { AddCommentComponent } from '../components/add-comment/add-comment.component';
import { UpdateCommentComponent } from '../components/update-comment/update-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentFormComponent } from '../components/comment-form/comment-form.component';

@NgModule({
  declarations: [
    CommentComponent,
    CommentDetailComponent,
    AddCommentComponent,
    UpdateCommentComponent,
    CommentFormComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class CommentModuleModule {}
