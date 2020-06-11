import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import {PLAYERS} from '../mock-players'
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players=[];
  selectedPlayer: Player;

  public competitionId: number = 5;
  public seasonId: number = 2019;
  public pointType: string;

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
   this.getPlayers();
  }

  private getPlayers(): void {
    this.players = [];
    this.playerService.getLeaguePlayerPoints(
        this.competitionId,
        this.seasonId,
        "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.cvk6WtH-74iRe6LBPEg7lwviUkc5A0oidsXvPsvCPeXhXT_0HM9Lx8iYsXUAHsRhCXYXXJx9GTdjJXvS2LBJ-HS8sALbY5Z3.cbcrk55DBZTBszuB6QtpYQ.Fla8zOXWsqLA2F5tOKBOjIKKQxmSZt55LE9HMz0XZcjK8b1CHifPwVr49F2krK755tZF5H4j4v296PuIJlasJvPEJ9DoiTbN6JccNQzINRQzpSK5wsKbCZ_PlJqOL4hlR9CcgNgWDDZKS8YK06vDSwEwd6SVnEZuEgQf1hqX2pgzavUcy-6qYlMC4ijuOhnL.i-N4WlK9yDNTiiiETe3gEKkqx2Y89iO7SuP9ipDkmHg",
        this.pointType
      ).subscribe((response:any)=>{
      console.log(response);
      this.players=response;
    });
  }
  
  public handleSelectLeague(competitionId, seasonId): void {
    this.competitionId = competitionId;
    this.seasonId = seasonId;
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  } 

}
