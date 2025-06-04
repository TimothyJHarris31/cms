import { EventEmitter, Injectable } from '@angular/core';
import Contact from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { CrudService } from '../shared/crud-service.base';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends CrudService<Contact> {
  constructor() {
    super(MOCKCONTACTS);
  }

  contactSelectedEvent = new EventEmitter<Contact>();
}
