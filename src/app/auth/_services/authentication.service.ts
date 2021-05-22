import { Injectable, OnDestroy } from '@angular/core';
import { LoginUser, User } from '../models/auth';
import {
  LocalStorageJwtService,
  StorageItems,
} from '../_services/local-storage-jwt.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, takeUntil } from 'rxjs/operators';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnDestroy {
  url = environment.url;
  _unsubscribe$ = new Subject();
  constructor(
    private localStorageJwtService: LocalStorageJwtService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _http: HttpClient
  ) {}
  login(loginInfo: LoginUser) {
    this._http
      .post(this.url + '/login', loginInfo, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        takeUntil(this._unsubscribe$),
        map((res: any) => {
          this.localStorageJwtService.setItem(StorageItems.jwtToken, res.token);
          this._snackBar.open(loginInfo.email + ' connecté avec succès', 'x', {
            duration: 2000,
            panelClass: ['success-snackbar'],
          });
          this.router.navigateByUrl('/shell');
        }),
        catchError((err) => {
          this._snackBar.open('Email or password are not correct ...', 'x', {
            duration: 2000,
            panelClass: ['danger-snackbar'],
          });
          return EMPTY;
        })
      )
      .subscribe();
  }
  logout() {
    this.localStorageJwtService.removeItem(StorageItems.jwtToken);
    this.router.navigateByUrl('login');
    this._snackBar.open('Vous avez déconnecté avec succès', 'x', {
      duration: 2000,
      panelClass: ['success-snackbar'],
    });
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
