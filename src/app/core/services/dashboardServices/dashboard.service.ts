import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashboard() {
    return this.http.get<any>('assets/data/data.json')
    .toPromise()
    .then(data => { return data; })
}
}
