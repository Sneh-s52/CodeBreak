import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  private baseUrl = 'https://www.reddit.com/r';

  constructor(private http: HttpClient) {}

  fetchSubreddit(subreddit: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${subreddit}.json`);
  }
}
