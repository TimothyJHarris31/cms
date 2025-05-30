import { Component } from '@angular/core';

export type View = 'documents' | 'messages' | 'contacts';
@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cms';
  selectedView: View = 'contacts';
}
