import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface CacheEntry { url: string; response: HttpResponse<any>; added: number }

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private cache = new Map<string, CacheEntry>();
  private ttl = 60_000; // 60s

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const key = req.urlWithParams;

      // Only cache GET and allow opt-out via 'x-skip-cache' header
      if (req.method !== 'GET' || req.headers.get('x-skip-cache') === 'true') {
        return next.handle(req);
      }

      const cacheKey = req.urlWithParams;
      const cached = this.cache.get(cacheKey);
      const now = Date.now();
      if (cached && (now - cached.added) < this.ttl) {
        return of(cached.response.clone());
      }

      return new Observable<HttpEvent<any>>(observer => {
        const sub = next.handle(req).subscribe({
          next: event => {
            if (event instanceof HttpResponse) {
              this.cache.set(cacheKey, { url: cacheKey, response: event.clone(), added: Date.now() });
            }
            observer.next(event);
          },
          error: err => observer.error(err),
          complete: () => observer.complete()
        });
        return () => sub.unsubscribe();
      });
  }
}
