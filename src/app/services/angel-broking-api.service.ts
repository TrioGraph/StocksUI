import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AngelBrokingApiService {
  private base = '/api/angel';
  constructor(private http: HttpClient) { }

  // options: skipLoader and skipCache opt-out behavior for interceptors
  post(endpoint: string, payload: any, options?: { skipLoader?: boolean; skipCache?: boolean; headers?: Record<string,string> }): Observable<any> {
    let headers = new HttpHeaders();
    if (options?.skipLoader) {
      headers = headers.set('x-skip-loader', 'true');
    }
    if (options?.skipCache) {
      headers = headers.set('x-skip-cache', 'true');
    }
    if (options?.headers) {
      Object.keys(options.headers).forEach(k => {
        headers = headers.set(k, options.headers![k]);
      });
    }

    return this.http.post(`${this.base}/${endpoint}`, payload, { headers });
  }

  // Example generated methods (one per model)
  postGeneric(name: string, payload: any){
    return this.post(name, payload);
  }
}
