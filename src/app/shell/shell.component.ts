import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
  MediaMatcher,
} from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../auth/_services/authentication.service';
import {
  LocalStorageJwtService,
  StorageItems,
} from '../auth/_services/local-storage-jwt.service';
import { HelpersService } from '../shared/helpers/helpers.service';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnDestroy {
  @ViewChild('sidnav') sidnav: any;
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  mobileQuery: MediaQueryList;
  isDarkMode: boolean;
  openned = true;
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
    private _localStorageService: LocalStorageJwtService,
    private _authenticationService: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isDarkMode = !!this._localStorageService.getItem(StorageItems.DM);
    document.body.className = this.isDarkMode ? 'dark-theme' : 'light-theme';
  }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkMode
      ? this._localStorageService.setItem(StorageItems.DM, 'true')
      : this._localStorageService.removeItem(StorageItems.DM);
    document.body.className = this.isDarkMode ? 'dark-theme' : 'light-theme';
  }

  logOut() {
    this._authenticationService.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
