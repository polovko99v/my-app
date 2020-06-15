import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
    constructor(
      private httpClient: HttpClient) {
    }

    public signIn(id: string, secret: string): Observable<any>
    {
      return this.httpClient.post<any>(`https://api.twelve.football/auth/login/username`, { id, secret });
    }

    public isAuthenticated(){
      return this.getAccessToken();
    }

    public getAccessToken(){
      return localStorage.getItem('twelve_token_id');
    }
}