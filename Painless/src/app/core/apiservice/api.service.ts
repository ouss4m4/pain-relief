import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public baseUrl = environment.baseUrl;
  public formatErrors(error: any) {
    return throwError(error.error);
  }
  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${path}`, { params }).pipe(catchError(this.formatErrors));
  }

  public post(url, body) {
    return this.httpClient.post(`${this.baseUrl}${url}`, body);
  }
}
