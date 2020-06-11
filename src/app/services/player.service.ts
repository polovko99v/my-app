import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
    constructor(private httpClient: HttpClient){

    }
    public getLeaguePlayerPoints(competitionId: number, seasonId: number, token: string, pointType?:string, positionType?:string): Observable<any>
  {
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    };

    var q = '?';
    if (pointType) q += '&pointType=' + pointType;
    if (positionType) q += '&positionType=' + positionType;

    return this.httpClient.get<any>(`https://api.twelve.football/vnext2/competitions/${competitionId}/seasons/${seasonId}/points${q}`, options );
  }
}