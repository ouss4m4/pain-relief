import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public baseUrl = environment.baseUrl;

  public get(url, options?) {
    options = options !== undefined ? options : {};
    return this.httpClient.get(
      `${this.baseUrl}${url}`,
      options !== undefined ? options : null
    );
  }

  public post(url, body) {
    return this.httpClient.post(`${this.baseUrl}${url}`, body);
  }
}
