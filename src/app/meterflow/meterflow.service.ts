import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Meterflow } from './meterflow';

@Injectable({
  providedIn: 'root'

})

export class MeterflowService {

  private apiURL = "http://localhost:8080/meterflow/api/v1";

  httpOptions = {

    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })

  }
  constructor(private httpClient: HttpClient) { }

  getMessageSearchFilesAll(form): Observable<Object[]> {
     var starDate= new Date(form.startDate).getTime();
     var endDate=new Date(form.endDate).getTime();
     const options = new HttpParams()
    .set('startDate',''+ starDate)
    .set('endDate', ''+endDate)
    .set('status', form.include);
    return this.httpClient.get<Object[]>(this.apiURL + '/message-search',{params: options})
    .pipe(catchError(this.errorHandler))
  }
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
