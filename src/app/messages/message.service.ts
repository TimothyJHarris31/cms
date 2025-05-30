import { Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages = MOCKMESSAGES;

  getMessages() {
    return this.messages;
  }

  getMessage(id: string) {
    return this.messages.find((m) => m.id === id);
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
