import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterExService {

  
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  serveUsers(): Observable<Member[]> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((users: any) => {
          return users.map(user => { 
            return {
              name: user.name, 
              email: user.email, 
              value: user.address.street 
            }
          })
        })
      );
  }

  getUsers() {
    return this.http.get(this.apiUrl)
      .pipe(
        map((users: any[]) => users.map(user => ({ ...user, status: (user.id % 2 === 0)})) )
      )
  }
}
export interface Member {
  name: string;
  email: string;
  address: string;
}