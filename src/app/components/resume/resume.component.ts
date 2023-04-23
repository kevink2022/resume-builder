import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  constructor(public managerService: ManagerService) {}
}
