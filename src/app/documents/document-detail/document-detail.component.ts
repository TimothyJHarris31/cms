import { Component, input, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { WinRefService } from '../../win-ref.service';

@Component({
  selector: 'cms-document-detail',
  standalone: false,
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css',
})
export class DocumentDetailComponent implements OnInit {
  document?: Document;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private winRefService: WinRefService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.document = this.documentService.get(params['id']);
      console.log(this.document);
    });
    this.nativeWindow = this.winRefService.nativeWindow;
  }

  view() {
    if (this.document?.url) {
      this.nativeWindow.open(this.document.url);
    }
  }
  delete() {
    this.documentService.delete(this.document!.id);
    this.router.navigate(['/documents']);
  }
}
