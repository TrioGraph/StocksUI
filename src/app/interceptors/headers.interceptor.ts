import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      setHeaders: {
        Accept: 'application/json',
        'X-Client-Name': 'StockAdminUI',
        'X-Client-Version': '0.1.0'
      }
    });
    return next.handle(cloned);
  }
}
