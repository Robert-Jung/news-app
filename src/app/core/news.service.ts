import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NewsService {

  baseURL = 'https://newsapi.org/v1/articles?source=techcrunch'
  apiKey = '66e2c8980e0d4b83a5e0c737837c06ec';

  constructor(private http: Http) {
  }

  getNewsItems() {
    return this.http
      .get(`${this.baseURL}&apiKey=${this.apiKey}`)
      .map((res) => res.json())
  }

}
