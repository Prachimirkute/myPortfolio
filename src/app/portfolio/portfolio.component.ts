import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_model/projects';
import { Tag } from '../_model/Tag';
import { ProjectServiceService } from './services/project.service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[];
  isCollapsed :boolean = true;
  constructor(private titleService:Title, private service : ProjectServiceService){
    this.titleService.setTitle('Prachi Mirkute - Portfolio');
    this.projects = service.getList();
  }
}
