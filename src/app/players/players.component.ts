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
        "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.N2v_ybKBHpU7Pdo1Szf0kfh_pMjWVOrYm9w5-4fE86P5B2aN2qPeikRgMiAyzsqxxOEMoD3da2R8BbchmlfcyiNMYfd_3KkY.OT6VqqGZHypAOrB1A2_2nQ.P5QfOVr6e1-l9ss-WYWcP0_zxIDKWscr7_r0QeR5sEYnkh-KZkSrJACvp23ZHqI_MhmZryWy3PLDNQiqlWpuhstXA-gsDMrzQ_yd-piFzZiywAgfe8lOkAqsXCj1zDE0960QHx7NfXA_uxMgyX_v-d4l8UPJHAytVe5kg4Q1KA-P2vPphYqBfR9iQ1DMAq-A.4OgAFaJbj1jlwA4gFDFhKq6Q447qxNYXzpi667A6aEw",
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
