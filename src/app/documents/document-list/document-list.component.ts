import { Component, inject, OnInit, output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent implements OnInit {
  documents!: Document[];
  private documentService = inject(DocumentService);
  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.documents = this.documentService.list();
    this.subscription = this.documentService.listChangedEvent.subscribe(
      (documents) => {
        this.documents = documents;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
  }
}
