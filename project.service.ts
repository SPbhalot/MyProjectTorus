import { Injectable } from '@angular/core';
import Employee from "../assets/employees.json"



@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  static CryptoCurrencyData:any;

  constructor() {
    ProjectService.CryptoCurrencyData=Employee.data
  
   }


  MultiUsers(user){
    let users=[];
     if(localStorage.getItem("Users")){
       users=JSON.parse(localStorage.getItem("Users"));
       users=[user,...users]
     
   }else{
     users=[user]
   }
   localStorage.setItem("Users",JSON.stringify(users))
   }
   
  
//     CryptoCurrencyData=[{
//     CurrencyName:"bitcoin",
//     CurrencyDetails:"today bitcoin price 12545654185"

// },{
//     CurrencyName:"ripple",
//     CurrencyDetails:"today ripple price 3568864753456"
// },
// {
//   CurrencyName:"ripple",
//   CurrencyDetails:"today ripple price 3568864753456"
// },
// {
//   CurrencyName:"ripple",
//   CurrencyDetails:"today ripple price 3568864753456"
// }

// ]

 



}


