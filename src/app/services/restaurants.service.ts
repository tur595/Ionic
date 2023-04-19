import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
      apiKey: `${environment.apiKey}`,
      contentType: 'application/json',
    });

    return this.http.post<ApiResult>(`${environment.baseUrl}`, this.input, {
      headers: header,
    });
  }
}
