import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService implements OnInit {
  private documents: Document[] = MOCKDOCUMENTS;
  @Output() documentSelectedEvent = new EventEmitter<Document>();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getDocuments() {
    return this.documents;
  }
  getDocument(name: string) {
    return this.documents.find((document) => document.name === name)!;
  }
}
