import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  faDownload = faDownload;
  constructor(private titleService:Title){
    this.titleService.setTitle('Prachi Mirkute - Resume');
  }
  downloadFile() {
    const url = "../assets/resume/Prachi Mirkute_resume.pdf";
    window.open(url);
} 
}
