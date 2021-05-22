import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  // TODO : Add error handling and loading
  error = undefined;
  isLoading = false;

  get f() {
    return this.loginForm.controls;
  }
  constructor(
    public _snackBar: MatSnackBar,
    private _authService: AuthenticationService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this._authService.login(this.loginForm.value);
  }
}
