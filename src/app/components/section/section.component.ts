import { Component, Input, OnInit } from '@angular/core';
import { Section, SectionType } from '../../models/section.model';
import { Job } from '../../models/job.model';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
    @Input() section!: Section;
    SectionType = SectionType;
    Job = Job;
    Project = Project;

    constructor() { }
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    toggleCheck() {
        this.section.isChecked = !this.section.isChecked;
    }
}
