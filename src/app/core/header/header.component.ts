import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCountry: any={
    icon:'fas fa-user-circle',
    name: "jhon Doe",
    command:()=>{}
  };
countries: any = [
  {
    icon:'fas fa-user-circle',
    name: "jhon Doe",
    command:()=>{}
  },
  {
    icon:'fas fa-cog',
    name: "Settings",
    command:()=>{}
  },
  {
    icon:'fas fa-sign-out-alt',
    name: "Logout",
    command:()=>this.logout()
  }
];
constructor(private router:Router) { }

ngOnInit(): void {
}

logout(){
  this.router.navigate([''])
}
detectUserActivity(e:any){
  e.value.command()
}
}
