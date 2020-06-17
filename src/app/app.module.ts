import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { RequestInterceptorService } from './services/request-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerPointPipe,
    PointsBarComponent,
    PointsSortPipe,
    SigninComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    PlayerService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptorService,
			multi: true,
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
