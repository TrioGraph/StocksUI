import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
  id: number;
  message: string;
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();
  toasts$ = this.toastSubject.asObservable();

  show(message: string, duration = 3000) {
    try {
      const id = Date.now() + Math.floor(Math.random() * 1000);
      this.toastSubject.next({ id, message, duration });
      return id;
    } catch (e) {
      // fallback
      console.log('Toast:', message);
      return null;
    }
  }
}
