import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _count = 0;
  public isLoading$ = new BehaviorSubject<boolean>(false);

  show(){
    this._count++;
    if(this._count > 0) this.isLoading$.next(true);
  }

  hide(){
    this._count = Math.max(0, this._count - 1);
    if(this._count === 0) this.isLoading$.next(false);
  }

  reset(){ this._count = 0; this.isLoading$.next(false); }
}
