import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './material-toolbar.component.html',
  styleUrls: ['./material-toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() isDarkMode: boolean = false;
  @Output() themeToggle: EventEmitter<void> = new EventEmitter<void>();

  panes = [
    { name: 'List', visible: true },
    { name: 'Tex', visible: false },
    { name: 'PDF', visible: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleTheme() {
    this.themeToggle.emit();
  }

  onPaneVisibilityChange() {
    const visiblePanes = this.panes.filter((pane) => pane.visible);
    if (visiblePanes.length < 2) {
      visiblePanes[0].visible = true;
    }
  }
}
