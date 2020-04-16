import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getApiData(): Observable<any> {
    const apiUrl = "https://api.github.com/users";

    return this.http.get<any>(apiUrl);

  }

}
