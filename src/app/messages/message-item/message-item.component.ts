import { Component, inject, input } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';

@Component({
  selector: 'cms-message-item',
  standalone: false,
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css',
})
export class MessageItemComponent {
  private messageService = inject(ContactService);
  message = input<Message>({ id: '', subject: '', msgText: '', sender: '' });
  getSender(id: string) {
    return this.messageService.getById(id)?.name;
  }
}
