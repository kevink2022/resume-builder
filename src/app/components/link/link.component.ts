import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent {
    @Input() link!: Link;

    constructor() { }

    toggleCheck() {
        this.link.isChecked = !this.link.isChecked;
    }
}
