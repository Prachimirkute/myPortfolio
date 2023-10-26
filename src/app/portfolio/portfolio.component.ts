import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_model/projects';
import { Tag } from '../_model/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[]=[
    {id:0,name:'Shopping List',summary:'The app provides a possibility to maintain receipe book and shopping lists',discription : 'The app provides a possibility to maintain receipe book and shopping lists .Customer have there own account customer can sign up or else login there own account',tags:[Tag.HTML,Tag.CSS, Tag.JAVASCRIPT,Tag.ANGULAR, Tag.TYPESCRIPT],picture : ["assets/photo_shoppinglist/1.png","assets/photo_shoppinglist/2.png","assets/photo_shoppinglist/3.png","assets/photo_shoppinglist/4.png","assets/photo_shoppinglist/5.png"],projectLink:"https://github.com/Prachimirkute/shopping_application/tree/master"},
    {id:1,name:'Food Application',summary:'The app provides Serach Recipes',discription : 'The app provides you to serach recipes. recipes list display on the screen. on that list add favorite button using that bustton you can add recipe item on faviorte list.on favorites you can remove items from favorites. ',tags:[Tag.HTML,Tag.CSS, Tag.JAVASCRIPT,Tag.REACTJS],picture : ["assets/react_photo.png","assets/react_photo2.png"],projectLink:'https://github.com/Prachimirkute/React-Food-app'}
]
isCollapsed :boolean = true;
  constructor(private titleService:Title){
    this.titleService.setTitle('Prachi Mirkute - Portfolio');
  }
}
