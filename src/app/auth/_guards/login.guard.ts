import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {
  LocalStorageJwtService,
  StorageItems,
} from '../_services/local-storage-jwt.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: LocalStorageJwtService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.storage.getItem$(StorageItems.jwtToken).pipe(
      map((token) => {
        if (token) {
          this.router.navigate(['/shell']);
          return false;
        }
        return true;
      })
    );
  }
}
