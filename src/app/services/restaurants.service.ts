import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  response: any[];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  input = {
    skip: 0,
    limit: 20,
    latitude: 38.418523,
    longitude: 27.127399,
  };

  constructor(private http: HttpClient) {}

  getCloseRestaurants(): Observable<ApiResult> {
    navigator.geolocation.getCurrentPosition((position) => {
      this.input.latitude = position.coords.latitude;
      this.input.longitude = position.coords.longitude;
    });

    const header = new HttpHeaders({
      accept: 'application/json',
      apiKey: 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2',
      contentType: 'application/json',
    });

    return this.http.post<ApiResult>(
      `https://smarty.kerzz.com:4004/api/mock/getFeed`,
      this.input,
      {
        headers: header,
      }
    );
  }
}
