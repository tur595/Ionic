import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  response: [];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  input = {
    skip: 0,
    limit: 5,
    latitude: 38.418523,
    longitude: 27.127399,
  };

  constructor(private http: HttpClient) {}

  getCloseRestaurants(): Observable<any> {
    const header = new HttpHeaders({
      accept: 'application/json',
      apiKey: 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2',
      contentType: 'application/json',
    });
    //let body
    return this.http.post(
      `https://smarty.kerzz.com:4004/api/mock/getFeed`,
      this.input,
      {
        headers: header,
      }
    );
  }
}
