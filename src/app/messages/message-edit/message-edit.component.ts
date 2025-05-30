import { Component, inject, model, output } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  private messageService = inject(MessageService);
  messageSent = output<Message>();
  subject = model<string>('');
  message = model<string>('');

  updateSubject(subject: string) {
    this.subject.update(() => subject);
  }
  updateMessage(message: string) {
    this.message.update(() => message);
  }

  send() {
    this.messageService.addMessage({
      id: '',
      subject: this.subject(),
      msgText: this.message(),
      sender: 'Bro. Harris',
    });
    this.clear();
  }

  clear() {
    console.log('clearing the form');
    this.subject.update(() => '');
    this.message.update(() => '');
  }
}
