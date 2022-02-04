import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';




@Component({
  selector: 'app-welcome-torus',
  templateUrl: './welcome-torus.page.html',
  styleUrls: ['./welcome-torus.page.scss'],
})
export class WelcomeTorusPage implements OnInit {
 
  static ShowItem : any
  static CurrencyApiData:any

  static SendDataForShow:any ;

  constructor(private router: Router,private sr:ProjectService) {
    WelcomeTorusPage.CurrencyApiData=ProjectService.CryptoCurrencyData
   
  }

  DisplayCurrencyDetails(Currency:any){
    WelcomeTorusPage.CurrencyApiData.forEach(element => {
      if(element.CurrencyName===Currency){
        WelcomeTorusPage.SendDataForShow=element.CurrencyDetails
       this.router.navigateByUrl("/details")

      }
      
    });

  }


  CurrencyApiCall(){
return WelcomeTorusPage.CurrencyApiData
  }








  

  ngOnInit() {


  }


}
