import { Injectable } from '@angular/core';
import { SPINNER_SET_TIMEOUT_DURATION } from '../constants/constants';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  loadingOn(): void {
    this.loading = true;
  }

  loadingOff(): void {
    setTimeout(() => {
      this.loading = false;
    }, SPINNER_SET_TIMEOUT_DURATION);
  }
}
