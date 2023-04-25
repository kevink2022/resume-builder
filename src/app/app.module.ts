// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSplitModule } from 'angular-split';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { JobComponent } from './components/job/job.component';
import { ProjectComponent } from './components/project/project.component';
import { BulletComponent } from './components/bullet/bullet.component';
import { SectionComponent } from './components/section/section.component';
import { LinkComponent } from './components/link/link.component';
import { CodeViewComponent } from './components/code-view/code-view.component';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    ProjectComponent,
    BulletComponent,
    SectionComponent,
    LinkComponent,
    CodeViewComponent,
    PdfViewComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AngularSplitModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
