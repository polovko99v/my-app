export interface Player {
  matchesCount:number,
  playerId:number,
  playerImageUrl:string,
  playerName:string,
  point:number,
  points:
    {
      type:string,
      value:number
    },
  position:string,
  teamId:number,
  teamName:string,
  totalLeaguePoint:number
}