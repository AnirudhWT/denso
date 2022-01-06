import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/core/services/globalServices/global-data.service';
import { LiveDashboardService } from 'src/app/core/services/liveUpdates/live-dashboard.service';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.scss']
})
export class ProductLineComponent implements OnInit {

  constructor(private router :Router,public globalServices:GlobalDataService, 
    public liveDashboardServices:LiveDashboardService) { }

  ngOnInit(): void {
  }
  getper(percent:number): string {
    return ``;
  }
  goToExploreDocuments(){
this.router.navigate(['user/addproductlinedetails'])
  }
}
