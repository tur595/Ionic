import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  response: [];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  //url = `https://smarty.kerzz.com:4004/api/mock/getFeed`;
  input = {
    skip: 0,
    limit: 5,
    latitude: 38.418523,
    longitude: 27.127399,
  };

  constructor(private http: HttpClient) {}

  getCloseRestaurants(): Observable<ApiResult> {
    const header = new HttpHeaders({
      accept: 'application/json',
      apiKey: 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2',
      contentType: 'application/json',
    });
    //let body
    return this.http.post<ApiResult>(
      `https://smarty.kerzz.com:4004/api/mock/getFeed`,
      this.input,
      {
        headers: header,
      }
    );
  }
}
