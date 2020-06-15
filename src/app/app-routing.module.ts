import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: "auth/signin",
    component: SigninComponent
  },
  {
    path: "leaderboard",
    component: PlayersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "/leaderboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
