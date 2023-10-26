import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService:Title){
    this.titleService.setTitle('Prachi Mirkute - Contact');
  }
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
