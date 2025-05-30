import { Component, input } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-detail',
  standalone: false,
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css',
})
export class DocumentDetailComponent {
  document = input<Document>();
}
