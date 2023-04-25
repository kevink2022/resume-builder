import { Component, EventEmitter, Output } from '@angular/core';
import { ManagerService } from './services/manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public managerService: ManagerService) {}

  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  @Output() splitDragEnd: EventEmitter<void> = new EventEmitter();

  onSplitDragEnd(event: any) {
    this.splitDragEnd.emit();
  }
}