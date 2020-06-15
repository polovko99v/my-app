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
        "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.O7PF5jRYnzxKj6PEl-deWqw1onVfPZtyNOOAwT40ltlrxSddbngneanKCERaH87H_Y2M3HLsgmXYrKLKGRY1U4UQ6c3OtAXM.FDmQRjD692sezgBj7l3YjQ.GddqgC4b8Ts-VswU3I5WjJ9tpxJdvy5hKZSXygivvOsOeiab2ocWqfUOKbqiZjvQXPJNsQ02r7cO5G5VNruIzoDMH9eT_WrBqMRfUEYWkWoPi2ABzGYPVCk6-N4zCFamDAoY8AhMqvbFOuYB-gAd5rBiSqv9Tfl0OUuDXlawIYWVR5m9XwguKaXg44mmxrkM.0JVId3DfsLFnleaCv5QUdTHJ6el6ddvFBwX3G2bLxS0",
        this.pointType,
        this.positionType
      ).subscribe((response:any)=>{
      console.log(response);
      this.players=response;
      this.showSpinner=false;
    });
    
    
  }
  
  public handleSelectLeague(competitionId, seasonId): void {
    this.competitionId = competitionId;
    this.seasonId = seasonId;
  
    this.getPlayers();
    this.showSpinner=true;
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  } 


}
