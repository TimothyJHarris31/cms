import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'cms-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  value = input<string>('');
  label = input<string>('');
  name = input<string>('');
  type = input<string>('');

  update = output<string>();

  input(value: Event) {
    this.update.emit((value.target as HTMLInputElement)?.value);
  }
}
