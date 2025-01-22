import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private BASE_URL = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getRepositories(language: string): Observable<any> {
    const query = `?q=language:${language}&sort=stars&order=desc`;
    return this.http.get(`${this.BASE_URL}${query}`);
  }
}
