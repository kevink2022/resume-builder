// pdf-view.component.ts

import { Component, OnInit, } from '@angular/core';
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss'],
})
export class PdfViewComponent {
  pdfSrc = 'assets/examples/example_resume.pdf';

  constructor() {}

}
