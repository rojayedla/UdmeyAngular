import { Injectable } from '@angular/core'; 
import { USERS } from './userdata';

import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultiSearch2Service {

  
  // setGroupFilter$ = new Subject<any>();
  // getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchUsers(): Observable<any> {
    return of(USERS);
  }
}
