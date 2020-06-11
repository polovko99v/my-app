import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-points-bar',
  templateUrl: './points-bar.component.html',
  styleUrls: ['./points-bar.component.css']
})
export class PointsBarComponent implements OnInit {
  @Input('total-point') totalPoint: number = 0;
  @Input('points') points: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

  }

}
