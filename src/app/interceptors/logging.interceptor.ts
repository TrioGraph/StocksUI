import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = Date.now();
    console.debug('[HTTP Request]', req.method, req.urlWithParams);
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        const ms = Date.now() - start;
        console.debug('[HTTP Response]', req.method, req.urlWithParams, event.status, `${ms}ms`);
      }
    }));
  }
}
