import { Component, output } from '@angular/core';
import { View } from './app.component';

@Component({
  selector: 'cms-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  viewSelected = output<View>();

  onSelect(view: View) {
    this.viewSelected.emit(view);
  }
}
