import { Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model';
import { CrudService } from '../shared/crud-service.base';

@Injectable({ providedIn: 'root' })
export class MessageService extends CrudService<Message> {
  constructor() {
    super(MOCKMESSAGES);
  }
}
