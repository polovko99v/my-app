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
  
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getLeaguePlayerPoints(5,2019,"eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.tzvRd-91JPTTtkr32gtfL1lvqNK60nYBvPY84TapX-TebB3_luFeCaVCgPsFv59bNSQaU0RN5sCAXa77qfATktyFn1xymk6E.V9tfUDsrsfEJT1mqTzGglA.Yktzks17BaXIrFANAEcJkwoxwllNmD46BOjfYAdhWxp1IDaWVd74Amc10uZzvha0jG16huvSJ-37hK2y3A2nxJI6UgAAmXkE7jAbtfpLMma9-Z2k5aZyhy1fQadUde6kPx2YIbw14PiPibH1HC-Za9iTkIkjMw801PXL2Rn8rSOeAphWO3i1nWzB4PsIiY2Z.r7LAjlANMvJFOjG15xOs8EqgbvH_ZzPNReDRuPXbaY0").subscribe((response:any)=>{
      console.log(response);
      this.players=response;
    })
  }
  
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  } 

}
