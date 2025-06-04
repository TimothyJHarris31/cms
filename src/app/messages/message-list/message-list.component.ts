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
    this.messages = this.messageService.list();
  }

  addMessage(message: Message) {
    this.messageService.create(message);
    this.messages = this.messageService.list();
  }
}
