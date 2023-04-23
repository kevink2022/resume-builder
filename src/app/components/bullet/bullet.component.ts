import { Component, Input } from '@angular/core';
import { Bullet } from '../../models/bullet.model';

@Component({
    selector: 'app-bullet',
    templateUrl: './bullet.component.html',
    styleUrls: ['./bullet.component.scss']
})
export class BulletComponent {
    @Input() bullet!: Bullet;

    constructor() { }

    toggleCheck() {
        this.bullet.isChecked = !this.bullet.isChecked;
    }
}
