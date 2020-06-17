import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import { PlayerService } from '../services/player.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  showSpinner:boolean=true;
  players=[];
  selectedPlayer: Player;

  public competitionId: number = 5;
  public seasonId: number = 2019;
  public pointType: string;
  public positionType: string;

  constructor(
    private authService: AuthService,
    private playerService:PlayerService
  ) { }

  ngOnInit(): void {
   this.getPlayers();
   
  }

  private getPlayers(): void {
    this.players = [];
    this.playerService.getLeaguePlayerPoints(
        this.competitionId,
        this.seasonId,
        this.authService.getUser().accessToken,
        this.pointType,
        this.positionType
      ).subscribe((response:any)=>{
      console.log(response);
      this.players=response;
      this.showSpinner=false;
    });
  }

  /* Handlers */
  public handleSelectLeague(competitionId, seasonId): void {
    this.competitionId = competitionId;
    this.seasonId = seasonId;
    this.getPlayers();
    this.showSpinner=true;
  }

  public handleSelectPointType(pointType: string): void {
    this.pointType = pointType;
    this.getPlayers();
    this.showSpinner=true;
  }

  public handleSelectPositionType(positionType: string): void {
    this.positionType = positionType;
    this.getPlayers();
    this.showSpinner=true;
  }

  public onSelect(player: Player): void {
    this.selectedPlayer = player;
  }



}
