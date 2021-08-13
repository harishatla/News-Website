import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7eba7d0b60044f4fae4eb1f5dcf63101";

  techApiUrl =  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7eba7d0b60044f4fae4eb1f5dcf63101"

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7eba7d0b60044f4fae4eb1f5dcf63101"

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl)
  }
}
