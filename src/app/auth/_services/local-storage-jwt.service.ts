import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageJwtService {
  constructor() {}

  getItem$(item: StorageItems): Observable<string | null> {
    const data = localStorage.getItem(item);
    if (data) {
      return of(data);
    }
    return of(null);
  }
  getItem(item: StorageItems) {
    const data = localStorage.getItem(item);
    if (data) {
      return data;
    }
    return null;
  }
  setItem(item: StorageItems, data: string): Observable<string> {
    localStorage.setItem(item, data);
    return of(data);
  }
  removeItem(item: StorageItems): Observable<boolean> {
    localStorage.removeItem(item);
    return of(true);
  }
}

export enum StorageItems {
  jwtToken = 'JWT',
  DM = 'DM',
}
