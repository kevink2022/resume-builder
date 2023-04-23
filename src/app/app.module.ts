import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobComponent } from './components/job/job.component';
import { ProjectComponent } from './components/project/project.component';
import { BulletComponent } from './components/bullet/bullet.component';
import { SectionComponent } from './components/section/section.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    ProjectComponent,
    BulletComponent,
    SectionComponent,
    LinkComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
