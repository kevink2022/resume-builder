// manager.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  resume!: Resume;

  constructor(private httpClient: HttpClient) {
    this.loadResumeData();
  }

  private loadResumeData(): void {
    this.httpClient.get('assets/examples/example_resume.json').subscribe(
      (data: any) => {
        this.resume = Resume.fromJson(data);
        console.log('Resume data loaded:', this.resume);
      },
      (error) => {
        console.error('Error loading resume data:', error);
      }
    );
  }

  generateTeX() {
    // Implement the TeX generation logic here
  }
}
