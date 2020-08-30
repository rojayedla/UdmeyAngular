import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReusableDataService {

   // private url;
    // = 'https://jsonplaceholder.typicode.com/users';

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, resource);

  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, { isRead: true }).pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  // reusable error handler

  handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return ('Unexpected handle error !...' + error);
    }
    if (error.status === 500) {
      return ('Server side error !...' + error);
    }
    return throwError(error);

  }
}
