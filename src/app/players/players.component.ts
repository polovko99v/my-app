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
    this.playerService.getLeaguePlayerPoints(5,2019,"eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.lxxKbYCCfeaQl67uARtddunpRjzL9tBSe2HnEKX_qpL4_Y8PsV8XO12aSFwikCY5OAviXe2cZbZAuTwtH7amyEdLvgit-Bzg.2vxS3UjfMXzoMxgr09Et4A.Z5LlY9Qn8sQIMdV-qhmco3et-WIU8BSp0RI9JUGeYbSzSzojIdMluWrus8T3vnSIS2NE65qgRimjnp15apllpBCpF7K-wCdJ7LlhzzCk-JVQF3jWLl6ORPfO3UYKLNlpI0VQFNfu1cd8_wJsQO9_2P2o2QdfQy_6LH0vi0n-PcJSY0Pcl8Vmmb9RN-aooTUp.hBwLCS9m9sePgaYzzvtXol4XYyaQ8OKwSsAYiJRp5u8").subscribe((response:any)=>{
      console.log(response);
      this.players=response;
    })
  }
  
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  } 

}
