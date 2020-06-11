import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerService } from './services/player.service';
import { PlayerPointPipe } from './pipes/player-point.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PointsBarComponent } from './common-components/points-bar/points-bar.component';
import { PointsSortPipe } from './pipes/points-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerPointPipe,
    PointsBarComponent,
    PointsSortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
