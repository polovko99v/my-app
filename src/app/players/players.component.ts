import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import { PlayerService } from '../services/player.service';

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

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
   this.getPlayers();
   
  }

  private getPlayers(): void {
    this.players = [];
    this.playerService.getLeaguePlayerPoints(
        this.competitionId,
        this.seasonId,
        "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.srTGP7zGmBKWwRbO770dTwrLqAq5viAw512BgXR_fb3eI2NNwgb6dujyeNPqWLA_p7bKPjEE1u3gXq4H9wXo0aTPPM5FE035.793xSYms22yC6JeKchFhSw.Th9m5Og_o8dzQwXUZP7KEVvEl_QN7QoYLq0Q5M9nmYUkw6KdHXt32UrF5MPDWiZcofaqBrc7w9e3T1Md6ulK5W6NPqjXlOQVCn03yx1ZrcUB5aj3auyXZYk4sx_g_RQVL0ANPSS-kbH5kDb48IPxCuSmrMG3ujzQEeY5w6pttiqEyxHNzd36ydeMPcIROVQZ.boXQO2jhClSZr0qmyA4auQcfL0ancwkg7QCPIa1lJpQ",
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
  }

  public handleSelectPositionType(positionType: string): void {
    this.positionType = positionType;
    this.getPlayers();
  }

  public onSelect(player: Player): void {
    this.selectedPlayer = player;
  }



}
