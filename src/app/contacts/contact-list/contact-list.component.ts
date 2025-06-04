import { Component, inject, OnInit, output } from '@angular/core';
import Contact from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  standalone: false,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  private contactService = inject(ContactService);
  contacts!: Contact[];
  private subscription!: Subscription;
  ngOnInit(): void {
    this.contacts = this.contactService.list();
    this.subscription = this.contactService.listChangedEvent.subscribe(
      (contacts) => {
        this.contacts = contacts;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
