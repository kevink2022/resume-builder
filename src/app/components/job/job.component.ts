// job.component.ts

import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
export class JobComponent {
    @Input() job!: Job;

    constructor() { }

    toggleCheck() {
        this.job.isChecked = !this.job.isChecked;
    }
}
