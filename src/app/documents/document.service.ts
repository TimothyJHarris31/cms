import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs';
import { CrudService } from '../shared/crud-service.base';

@Injectable({
  providedIn: 'root',
})
export class DocumentService extends CrudService<Document> {
  public documentSelectedEvent = new EventEmitter<Document>();

  constructor() {
    super(MOCKDOCUMENTS);
  }
}
