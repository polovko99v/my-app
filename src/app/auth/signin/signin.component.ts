import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
        username: ['', Validators.required],
        secret: ['', Validators.required]
    });
  }

  get f() { return this.signinForm.controls; }

  public onSubmit(): void {
    this.submitted = true;

    if (this.signinForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.signIn(this.f.username.value, this.f.secret.value)
        .subscribe(
            data => {
                localStorage.setItem('twelve_token_id', data.accessToken);
                this.router.navigate(['/']);
            },
            error => {
                this.alertService.error('Something wrong!');
                this.loading = false;
            });
  }

}
