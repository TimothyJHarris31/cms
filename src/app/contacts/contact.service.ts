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

  getContacts() {
    return this.contacts;
  }

  getContact(id: string) {
    return this.contacts.find((contact) => contact.id === id);
  }
}
