import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_model/projects';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  project = {} as Project;
  constructor(public bsModalRef:BsModalRef){}
}