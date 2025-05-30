import { Component, inject, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent implements OnInit {
  private messageService = inject(MessageService);
  messages!: Message[];

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  addMessage(message: Message) {
    this.messageService.addMessage(message);
    this.messages = this.messageService.getMessages();
  }
}
