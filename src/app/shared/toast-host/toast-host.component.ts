import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast-host',
  template: `
  <div class="toast-host" aria-live="polite" aria-atomic="true">
    <div class="toast" *ngFor="let t of toasts" [attr.data-id]="t.id">
      {{ t.message }}
    </div>
  </div>
  `,
  styles: [
    `:host { position: fixed; right: 16px; bottom: 16px; z-index: 11000; display: block; }
     .toast-host { display: flex; flex-direction: column; gap: 8px; align-items: flex-end; }
     .toast { background: rgba(0,0,0,0.84); color: #fff; padding: 8px 12px; border-radius: 8px; box-shadow: 0 6px 18px rgba(2,6,23,0.4); max-width: 360px; font-size: 13px; transform: translateY(8px); opacity: 0; transition: transform .18s ease, opacity .18s ease; }
     .toast-host .toast[data-id] { transform: translateY(0); opacity: 1; }
    `
  ]
})
export class ToastHostComponent implements OnDestroy {
  toasts: ToastMessage[] = [];
  private sub: Subscription | null = null;

  constructor(private toastService: ToastService, private cdr: ChangeDetectorRef) {
    this.sub = this.toastService.toasts$.subscribe((t) => {
      this.toasts = [...this.toasts, t];
      this.cdr.detectChanges();
      const duration = t.duration ?? 3000;
      setTimeout(() => this.removeToast(t.id), duration + 20);
    });
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
