import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerService } from './services/player.service';
import { PlayerPointPipe } from './pipes/player-point.pipe';
import { PointsBarComponent } from './common-components/points-bar/points-bar.component';
import { PointsSortPipe } from './pipes/points-sort.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerPointPipe,
    PointsBarComponent,
    PointsSortPipe,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
