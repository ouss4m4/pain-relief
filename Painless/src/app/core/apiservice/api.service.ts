import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public baseUrl = environment.baseUrl;

  public get(url, options) {
    return this.httpClient.get(`${this.baseUrl}${url}`, options);
  }

  public post(url, body) {
    return this.httpClient.post(`${this.baseUrl}${url}`, body);
  }
}
