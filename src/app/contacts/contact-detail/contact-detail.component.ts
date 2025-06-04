import { Component, OnInit } from '@angular/core';
import Contact from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent implements OnInit {
  contact?: Contact;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contact = this.contactService.get(params['id']);
    });
  }

  delete() {
    this.contactService.delete(this.contact!.id);
    this.router.navigate(['/contacts']);
  }
}
