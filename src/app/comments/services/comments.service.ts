import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {
  constructor(private httpClient: HttpClient) {}
  private _jsonURL = '/assets/db.json';
  getComments(): Observable<CommentInterface[]> {
    // return this.httpClient.get<CommentInterface[]>(
    //   'http://localhost:4200/api/comments'
    // );
    return this.httpClient.get<CommentInterface[]>(
      this._jsonURL
    );
  }

  createComment(
    text: string,
    parentId: string | null = null //null means it is not a reply
  ): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(
      'http://localhost:4200/api/comments',
      {
        body: text,
        parentId,
        createdAt: new Date().toISOString(),
        userId: '1',
        username: 'John',
      }
    );
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
      `http://localhost:4200/comments/${id}`,
      {
        body: text,
      }
    );
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:4200/comments/${id}`);
  }
}