import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loading: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // support opt-out via custom header 'x-skip-loader'
    const skip = req.headers.get('x-skip-loader');
    if (skip === 'true') {
      return next.handle(req);
    }
    this.loading.show();
    return next.handle(req).pipe(finalize(() => this.loading.hide()));
  }
}
