import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  items:any;
  home:any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      
  ];
  
  this.home = {icon: 'pi pi-microsoft',label:"Home"};
  }

}
