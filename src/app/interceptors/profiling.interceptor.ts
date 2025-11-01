import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestMetricsService } from '../services/request-metrics.service';

@Injectable()
export class ProfilingInterceptor implements HttpInterceptor {
  constructor(private metrics: RequestMetricsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = performance.now();
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        const dur = Math.round(performance.now() - start);
        this.metrics.record({ url: req.urlWithParams, method: req.method, durationMs: dur, status: event.status, time: Date.now() });
      }
    }));
  }
}
