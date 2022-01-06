import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-side-nav',
  templateUrl: './sliding-side-nav.component.html',
  styleUrls: ['./sliding-side-nav.component.scss']
})
export class SlidingSideNavComponent implements OnInit {
openedNav:boolean=false;
@Input() orientation:any;
@Input() heading:any;
@Input() scrollingContent:any;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNav(){
    this.openedNav=!this.openedNav
  }
}
