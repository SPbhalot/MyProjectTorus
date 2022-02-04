import { Component, OnInit } from '@angular/core';
import { WelcomeTorusPage } from '../welcome-torus/welcome-torus.page';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    UserDataShow:any
    
  constructor() { 
  }
  // UserDataShow:any;

  ngOnInit() {
  this.UserDataShow=WelcomeTorusPage.SendDataForShow

  }

}
