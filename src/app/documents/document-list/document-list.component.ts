import { Component, inject, OnInit, output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent implements OnInit {
  documents!: Document[];
  private documentService = inject(DocumentService);
  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }
  onSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
  }
}
