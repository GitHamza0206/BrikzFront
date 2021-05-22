import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  LocalStorageJwtService,
  StorageItems,
} from '../_services/local-storage-jwt.service';
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _localStorageJwtService: LocalStorageJwtService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this._localStorageJwtService.getItem$(StorageItems.jwtToken).pipe(
      map((e) => {
        if (e) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
