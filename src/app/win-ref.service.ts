import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WinRefService {
  get nativeWindow() {
    return window;
  }
}
