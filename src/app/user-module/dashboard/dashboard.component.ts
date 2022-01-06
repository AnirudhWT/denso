import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LiveDashboardService } from '../../core/services/liveUpdates/live-dashboard.service';
import { GlobalDataService } from '../../core/services/globalServices/global-data.service';
import *  as  data from './data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: any = ['', '', '', '', '', '']
  data: any = data
  machineDocUploadPopup: any = false;
  constructor(public globalServices: GlobalDataService,
    public liveDashboardServices: LiveDashboardService,
    private router: Router) { }

  ngOnInit(): void {

    this.liveDashboardServices.setoption(this.globalServices.getSelectedOption().key)
  }
  getper(percent: number): string {
    return ``;
  }
  goToProductLine() {
    this.router.navigate(['user/productline']);
  }
  addEntity() {
    if (this.globalServices.getSelectedOption().label == 'Product Line') {
      this.router.navigate(['user/addproductline'])
    }
    if (this.globalServices.getSelectedOption().label == 'Machine Documents') {
      this.togglePopup()
    }

  }
  togglePopup(){
    this.machineDocUploadPopup=!this.machineDocUploadPopup
  }
}
