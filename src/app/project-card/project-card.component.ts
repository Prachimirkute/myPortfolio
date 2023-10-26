import { Component, Input } from '@angular/core';
import { Project } from '../_model/projects';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
@Input() project = {} as Project;
bsModalRef:any =BsModalRef;
constructor(private ModalService:BsModalService){
  
}
openProjectModel(){
  const modalOptions : ModalOptions ={
    class : "modal-lg",
    initialState :{
      project :this.project
    }
  };
  this.bsModalRef = this.ModalService.show(ProjectModalComponent, modalOptions);
}
}
