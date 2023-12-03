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
    {id:1,name:'Food Application',summary:'The app provides Serach Recipes',discription : 'The app provides you to serach recipes. recipes list display on the screen. on that list add favorite button using that bustton you can add recipe item on faviorte list.on favorites you can remove items from favorites. ',tags:[Tag.HTML,Tag.CSS, Tag.JAVASCRIPT,Tag.REACTJS],picture : ["assets/react_photo.png","assets/react_photo2.png"],projectLink:'https://github.com/Prachimirkute/React-Food-app'},
    {id:2,name:'Search Country Information Application',summary:'A simple application to fetch and display information about a country.',discription : 'This project consists of a React frontend interface that allows users to input a countrys name. The frontend makes requests to a NodeJS backend server, which is Fetch all Country Information and the specified Country Information from the countries API. The retrieved information is then rendered back to the user in an easily understandable format.1. Fetch All Country Information from the Backend:When the frontend application loads, you can make an initial request to the backend endpoint that fetches information for all countries. This information can be stored on the frontend and used to quickly display details when users search for a specific country.- Create a backend endpoint (api/countryList) that fetches information for all countries.- On the frontend, make an initial API request to this endpoint when the application loads and display all   frontend data.2. User-Friendly Interface to Input a Country Name:Provide a simple and user-friendly input field in the frontend where users can type the name of the country they want to search.- Use a text input field in the frontend for users to enter the country name.3. Quickly Display Specific Country Information:When a user enters a country name, the frontend should quickly display relevant information about that.- Use asynchronous requests to the backend (api/countries) when the user enters a country name.Dynamically update the frontend interface to display relevant information.4. Read More Button for Additional Information:Provided a "Read More" button that users can click to access additional detailed information about the country.Error Handling: Implement proper error handling on both the frontend and backend to manage cases where the country name is not found or there are network issues.Loading State: Show a loading indicator while waiting for the backend response.Responsive Design: Ensure that the frontend application is responsive and works well on different devices and screen sizes. ',tags:[Tag.HTML,Tag.CSS, Tag.JAVASCRIPT, Tag.REACTJS,Tag.NODEJS , Tag.EXPRESSJS],picture : ["assets/country_search_application/photo1.png","assets/country_search_application/photo2.png","assets/country_search_application/photo3.png","assets/country_search_application/photo4.png","assets/country_search_application/photo5.png"],projectLink:'https://github.com/Prachimirkute/Country_Search_Application'}
  ]
isCollapsed :boolean = true;
  constructor(private titleService:Title){
    this.titleService.setTitle('Prachi Mirkute - Portfolio');
  }
}
