import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
    constructor(private httpClient: HttpClient){

    }
    public getLeaguePlayerPoints(competitionId: number, seasonId: number, token: string): Observable<any>
  {
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    };

    return this.httpClient.get<any>(`https://api.twelve.football/vnext2/competitions/5/seasons/2019/points`, options );
  }
}