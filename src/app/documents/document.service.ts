import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService implements OnInit {
  private documents: Document[] = MOCKDOCUMENTS;
  @Output() documentSelectedEvent = new EventEmitter<Document>();
  @Output() documentChangedEvent = new EventEmitter<Document[]>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  list() {
    return this.documents;
  }
  getById(id: string) {
    return this.documents.find((document) => document.id === id)!;
  }

  delete(id: string) {
    this.documents = this.documents.filter((document) => document.id !== id);
    this.documentChangedEvent.emit(this.documents);
  }
}
