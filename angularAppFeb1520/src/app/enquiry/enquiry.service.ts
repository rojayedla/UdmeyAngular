import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import enquJson  from './enquiry-data';
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private httpClient: HttpClient) {
    
   }

   getEnquiryData(requestBody: any): Observable<any> {
      return of(enquJson);
     // return this.httpClient.post<any>('assets/equiry/data', requestBody )
  }
}

export interface DataCodes {
 country: DataCode[];
}
export interface DataCode {
  code: string;
  name: string;
  disabled?: boolean;
}