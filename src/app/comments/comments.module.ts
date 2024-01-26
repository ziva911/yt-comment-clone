import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CommentsComponent, CommentComponent, CommentFormComponent],
  providers: [CommentsService],
  exports: [CommonModule, CommentsComponent, CommentComponent, CommentFormComponent, ReactiveFormsModule],
})
export class CommentsModule {}