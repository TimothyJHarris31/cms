import { Component, input } from '@angular/core';

@Component({
  selector: 'cms-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  theme = input<
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
  >();

  type = input<'button' | 'submit' | 'reset'>('button');
}
