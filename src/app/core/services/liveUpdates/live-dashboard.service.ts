import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboardServices/dashboard.service';
import { GlobalDataService } from '../globalServices/global-data.service';

@Injectable({
  providedIn: 'root'
})
export class LiveDashboardService {
currentProductData:any;
  constructor(private globalServices: GlobalDataService,private dashBoardServices:DashboardService) { }

  setoption(key: any) {
    this.globalServices.getFilterOptions().forEach((element: any) => {
      if (key == element.key) {
        element.isActive = true
      }
      else {
        element.isActive = false
      }
    })
    this.getDashboardData();
  }

  getDashboardData(){
    this.dashBoardServices.getDashboard().then((response:any)=>{
      this.currentProductData=response[this.globalServices.getSelectedOption().key]
    })
  }

  getCurrentProductData(){
    return this.currentProductData;
  }
}
