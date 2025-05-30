import { Component, input, output } from '@angular/core';
import Contact from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  standalone: false,
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css',
})
export class ContactItemComponent {
  contact = input<Contact>({
    id: '',
    name: '',
    email: '',
    phone: '',
    imageUrl: '',
    group: [],
  });

  getContactInitals() {
    return this.contact()
      .name.split(' ')
      .map((n) => n[0])
      .join('');
  }
}
