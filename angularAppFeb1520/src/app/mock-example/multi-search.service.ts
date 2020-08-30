import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MultiSearchService {
 // url = './student.json'
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get("./assets/student.json"); 

  }
}

