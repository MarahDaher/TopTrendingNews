import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from '../../node_modules/rxjs/operators';


@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(valueInput , fromDate , toDate) {
   // var apiUrl = 'http://newsapi.org/v2/everything?q='+ valueInput + '&from=2020-11-06&to=2020-11-06&sortBy=popularity&apiKey=65ec8c9d596f40a4875634ea60b468cf' ;
   // tslint:disable-next-line: max-line-length
   var apiUrl = 'http://newsapi.org/v2/everything?q=' + valueInput + '&from=' + fromDate + '&to=' + toDate + '&sortBy=popularity&apiKey=65ec8c9d596f40a4875634ea60b468cf' ;
   return this.http.get(apiUrl).pipe(map(result => result));
  }
}
