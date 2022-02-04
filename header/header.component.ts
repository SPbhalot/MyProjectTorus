import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';
import { PluginListenerHandle, Plugins } from '@capacitor/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   backButtonListenerHandle = useRef<PluginListenerHandle>()
  WelcomeUser: string = "";
  myWindow:any;
  platform:any;
  constructor(private router:Router,
  platform: Platform) {
    this.platform = platform,
    this.WelcomeUser = HomePage.UserName;
   }
   GoToHomePage(){
     this.router.navigateByUrl("/welcome-torus")
   }
   exitbutton(){
   console.log(window)

  }
 
  closeWin() {
   
  
     
    
    
  }
  ngOnInit() {}

}
function ionic(ionic: any) {
  throw new Error('Function not implemented.');
}

function useRef<T>() {
  throw new Error('Function not implemented.');
}

