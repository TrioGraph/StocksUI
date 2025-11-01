import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { mergeMap, retryWhen, scan } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only retry idempotent methods and only for transient server errors (502,503,504)
    const shouldRetry = ['GET','HEAD','OPTIONS'].includes(req.method);
    if (!shouldRetry) return next.handle(req);

    const retriableStatus = [502, 503, 504];
    const maxRetries = 3;
    const baseDelayMs = 500; // base for exponential backoff

    return next.handle(req).pipe(
      retryWhen(error$ => error$.pipe(
        mergeMap((err: any, i: number) => {
          const attempt = i + 1;
          const status = err && err.status ? Number(err.status) : null;

          // not a retriable status -> rethrow immediately
          if (!status || retriableStatus.indexOf(status) === -1) {
            return throwError(err);
          }

          if (attempt > maxRetries) {
            return throwError(err);
          }

          // respect Retry-After header when available
          let delayMs = Math.pow(2, attempt - 1) * baseDelayMs;
          try {
            const ra = err && err.headers && typeof err.headers.get === 'function' ? err.headers.get('retry-after') : null;
            if (ra) {
              const raNum = Number(ra);
              if (!Number.isNaN(raNum)) {
                delayMs = raNum * 1000;
              } else {
                const then = Date.parse(ra);
                if (!Number.isNaN(then)) {
                  const diff = then - Date.now();
                  if (diff > 0) delayMs = diff;
                }
              }
            }
          } catch (e) {
            // ignore and fall back to backoff
          }

          return timer(delayMs);
        })
      ))
    );
  }
}
