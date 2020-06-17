import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
    constructor(
      private httpClient: HttpClient) {
        this._user.next(this.getUser());
    }

    private _user: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
    public user$: Observable<any> = this._user.asObservable();

    public signIn(id: string, secret: string): Observable<any>
    {
      return this.httpClient.post<any>(`https://api.twelve.football/auth/login/username`, { id, secret });
    }

    public getUser(): any {
      return localStorage.getItem('twelve_user') ? JSON.parse(localStorage.getItem('twelve_user')) : undefined;
    }

    public setUser(user: any) {
      if (user) {
        const { accessToken, imageOriginal } = user;
        localStorage.setItem('twelve_user', JSON.stringify({ accessToken, imageOriginal}));
      } else{
        localStorage.removeItem('twelve_user');
      }
      this._user.next(user);
    }

    public isAuthenticated(){
      return Boolean(this.getUser());
    }
}