import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient) { }

  getWeather(search_query : string) : Observable<any> {

    let baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
    return this.httpClient.get(baseUrl);
  }
}
