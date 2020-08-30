import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReusableDataService } from './reusable-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ReusableDataService {
 constructor( http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/users', http);
  }

}
