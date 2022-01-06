import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private http: HttpClient) { }
  getUploadedSteps() {
    return this.http.get<any>('assets/data/newProduct.json')
    .toPromise()
    .then(data => { return data; })
}
}
