import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { USERS } from 'src/app/mock-example/multi-search2/userdata';
@Injectable({
  providedIn: 'root'
})
export class MultiSearch2Service {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchUsers(): Observable<any> {
    return of(USERS);
  }
}
