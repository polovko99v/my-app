import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService
  ){

  }

  title = 'my-app';
  public user: any = undefined;

  ngOnInit() {
    //this.user = this.authService.getUser();
    this.authService.user$.subscribe(user => this.user = user);
  }

  public get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public handleLogOut() {
    this.authService.setUser(undefined);
  }
}
