import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router) { }

  ngOnInit(): void {

  }

  public handleSignIn(): void {
    this.authService.signIn("guest", "Guest").subscribe((response) => {
        localStorage.setItem('twelve_token_id', response.accessToken);
        this.router.navigate(['/']);
    });
  }

}
