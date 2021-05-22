import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './_guards/auth.guard';
import { LoginGuard } from './_guards/login.guard';
import { TokenInterceptorService } from './_interceptors/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptorService } from './_interceptors/api-prefix-interceptor.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule],
  providers: [
    AuthGuard,
    LoginGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiPrefixInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
  ],
})
export class AuthModule {}
