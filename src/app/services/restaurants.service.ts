import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  //url = `https://smarty.kerzz.com:4004/api/mock/getFeed`;
  input = {
    skip: 0,
    limit: 1,
    latitude: 0,
    longitude: 0,
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
