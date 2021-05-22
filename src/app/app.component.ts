import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HelpersService } from './shared/helpers/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pfe-front';
  isloading$: Observable<boolean>;
  constructor(private _helpersService: HelpersService) {
    this.isloading$ = _helpersService.loading$;
  }
}
