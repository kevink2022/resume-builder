// project.component.ts

import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
    @Input() project!: Project;

    constructor() { }

    toggleCheck() {
        this.project.isChecked = !this.project.isChecked;
    }
}
