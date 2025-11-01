import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private tokenKey = 'stock_admin_token';

  login(username: string, password: string): Observable<boolean> {
    // Mock authentication: accept any non-empty credentials
    if(username && password){
      const token = btoa(username + ':' + new Date().toISOString());
      localStorage.setItem(this.tokenKey, token);
      return of(true);
    }
    return of(false);
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.tokenKey);
  }
}
