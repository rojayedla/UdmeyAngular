import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  createPost(post) {
    return   this.http.post(this.url, post);

  }
updatePost(post) {
  return  this.http.patch(this.url + '/' + post.id, {isRead: true}).pipe(catchError(this.handleError));
}

  deletePost(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
      );
  }

// reusable error handler

  handleError(error: HttpErrorResponse) {
   if (error.status === 404) {
       return  ('Unexpected handle error !...' + error);
   }
   if (error.status === 500) {
    return  ('Server side error !...' + error);
}
   return throwError(error);

    }
}
