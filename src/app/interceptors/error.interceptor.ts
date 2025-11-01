import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toast: ToastService, private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if (!err) return throwError(() => err);
      const message = err.error?.message || err.message || 'Server error';
      // handle auth
      if (err.status === 401) {
        this.toast.show('Session expired, please login');
        try{ this.auth.logout(); }catch(e){}
        this.router.navigate(['/login']);
      } else if(err.status >= 500) {
        this.toast.show('Server error. Try again later.');
      } else {
        // show non-intrusive message
        this.toast.show(message);
      }
      return throwError(() => err);
    }));
  }
}
