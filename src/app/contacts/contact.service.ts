import { EventEmitter, Injectable } from '@angular/core';
import Contact from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[];
  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();

  list() {
    return this.contacts;
  }

  getById(id: string) {
    return this.contacts.find((contact) => contact.id === id);
  }

  delete(id: string) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.contactChangedEvent.emit(this.contacts);
  }
}
