import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // AuthService stores token under 'stock_admin_token'
    const token = localStorage.getItem('stock_admin_token');
    if (token) {
      const cloned = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
